import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Card from "../card/Card";
import "./list.scss";

export default function List({ subCat, maxPrice, sort, catId }) {
  const { isLoading, error, data } = useQuery(
    ["list", catId, subCat, maxPrice, sort],
    async () => {
      const res = await makeRequest.get(
        `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
          (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
      );
      return res.data.data;
    }
  );
  return (
    <div className="list">
      {error ? (
        "Something went wrong"
      ) : isLoading ? (
        <div className="loading">
          <img src="/icon/load.gif" alt="" />
        </div>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
}
