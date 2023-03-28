import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../axios";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51LCk7IIwkAcg4u23OtN42fhTDECdywjY6myH2zZAvXYNCbTkasduogL6OA5ncdGoyao8tEFKdJdkyjz0ck7Y3J2q00GqicGiMA"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item?.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <img
            src="/icon/delete.png"
            alt=""
            className="icon"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset
      </span>
    </div>
  );
}
