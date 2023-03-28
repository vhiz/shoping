import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email" />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <img src="/icon/facebook.png" alt="" />
          <img src="/icon/insta.png" alt="" />
          <img src="/icon/twiter.png" alt="" />
          <img src="/icon/google.png" alt="" />
          <img src="/icon/pintrest.png" alt="" />
        </div>
      </div>
    </div>
  );
}
