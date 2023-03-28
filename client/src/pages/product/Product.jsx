import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import { addToCart } from "../../redux/cartReducer";
import "./product.scss";

export default function Product() {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { isLoading, error, data } = useQuery(["product", id], async () => {
    const res = await makeRequest.get(`/products/${id}?populate=*`);
    return res.data.data;
  });

  const dispatch = useDispatch();
  return (
    <div className="product">
      {error ? (
        "Something went Wrong"
      ) : isLoading ? (
        <div className="loading">
          <img src="/icon/load.gif" alt="" />
        </div>
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.VITE_URL +
                  data.attributes.img.data.attributes.url
                }
                alt=""
                onClick={(e) => {
                  setSelectedImg("img");
                }}
              />
              <img
                src={
                  import.meta.env.VITE_URL +
                  data.attributes.img2.data.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_URL +
                  data.attributes[selectedImg].data.attributes.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data.attributes.title}</h1>
            <span className="price">${data.attributes.price}</span>
            <p>{data.attributes.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    quantity,
                    img: data.attributes.img.data.attributes.url,
                  })
                )
              }
            >
              <img src="/icon/cart.png" alt="" />
              ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <img src="/icon/like.png" alt="" /> ADD TO WISHLIST
              </div>
              <div className="item">
                <img src="/icon/like.png" alt="" />
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polp</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATON</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
