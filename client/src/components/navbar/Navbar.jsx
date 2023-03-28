import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/icon/flag.png" alt="" />
            <img src="/icon/down.png" className="icon" alt="" />
          </div>
          <div className="item">
            <span>USD</span>
            <img src="/icon/down.png" alt="" className="icon" />
          </div>
          <div className="item">
            <Link
              to={"/products/:1"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Women
            </Link>
          </div>
          <div className="item">
            <Link
              to={"/products/:1"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Men
            </Link>
          </div>
          <div className="item">
            <Link
              to={"/products/:1"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            SHOPPING
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              About
            </Link>
          </div>
          <div className="item">
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Stores
            </Link>
          </div>
          <div className="icons">
            <img src="/icon/search.png" alt="" />
            <img src="/icon/person.png" alt="" />
            <img src="/icon/like.png" alt="" />
            <div
              className="cartIcon"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src="/icon/cart.png" alt="" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}
