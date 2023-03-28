import "./categories.scss";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/premium-photo/designer-african-american-young-guy-wearing-black-clothes-sitting-showroom_259150-27115.jpg?size=626&ext=jpg&ga=GA1.2.139600791.1678327390&semt=ais"
            alt=""
          />
          <button>
            <Link
              to="/products/6"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/modish-african-american-woman-red-shirt-jeans-skirt-posed-clothes-store-it-s-time-shopping_627829-672.jpg?size=626&ext=jpg&ga=GA1.2.139600791.1678327390&semt=ais"
            alt=""
          />
          <button>
            <Link
              to="/products/3"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/happy-joyful-afro-woman-dances-with-triumph-against-clothes-rack-prefers-outfits-yellow-colour-wears-fashionable-jacket-jeans-moves-actively-near-home-wardrobe_273609-32741.jpg?size=626&ext=jpg&ga=GA1.2.139600791.1678327390&semt=ais"
            alt=""
          />
          <button>
            <Link
              to="/products/5"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/free-photo/african-american-student-sitting-stairs-park_1303-11985.jpg?size=338&ext=jpg&ga=GA1.2.139600791.1678327390&semt=ais"
                alt=""
              />
              <button>
                <Link
                  to="/products/2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/free-photo/decorative-cosmetics-accessories-sunglasses-hat-white-table_176420-11865.jpg?size=626&ext=jpg&ga=GA1.1.139600791.1678327390&semt=ais"
                alt=""
              />
              <button>
                <Link
                  to="/products/1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/woman-posing-with-stylish-footwear-summer-fashion-bag_285396-516.jpg?size=626&ext=jpg&ga=GA1.2.139600791.1678327390&semt=ais"
            alt=""
          />
          <button>
            <Link
              to="/products/4"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
