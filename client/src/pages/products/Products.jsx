import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import List from "../../components/list/List";
import "./products.scss";

export default function Products() {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);

  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { isLoading, error, data } = useQuery(["products", catId], async () => {
    const res = await makeRequest.get(
      `/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`
    );
    return res.data.data;
  });

  const {
    isLoading: loadCat,
    error: errorCat,
    data: dataCat,
  } = useQuery(["category", catId], async () => {
    const res = await makeRequest.get(`/categories/${catId}?populate=*`);
    return res.data.data;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {error ? (
            "Something went wrong"
          ) : isLoading ? (
            <div className="loading">
              <img src="/icon/load.gif" alt="" />
            </div>
          ) : (
            data.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          )}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={1000}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by </h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      {errorCat ? (
        "Something went wrong"
      ) : loadCat ? (
        <div className="loading">
          <img src="/icon/load.gif" alt="" />
        </div>
      ) : (
        <div className="right">
          <img
            src={
              import.meta.env.VITE_URL +
              dataCat.attributes.img.data.attributes.url
            }
            alt=""
            className="catImg"
          />
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCat={selectedSubCats}
          />
        </div>
      )}
    </div>
  );
}
