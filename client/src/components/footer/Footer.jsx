import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arravials</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora
            voluptas soluta natus dicta. Asperiores animi enim dolorem quae
            sapiente id similique, maxime, aperiam, quos ea minima labore ipsum
            facere.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odit blanditiis quae ab iure dignissimos debitis expedita doloribus
            animi. Voluptates architecto in, cupiditate pariatur illo doloribus
            labore possimus quasi blanditiis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Shoping</span>
          <span className="copyright">Copyright 2023, all right reserved</span>
        </div>
      </div>
    </div>
  );
}
