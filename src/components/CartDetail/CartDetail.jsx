import "./CartDetail.css";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "../../redux/selectors";
import CartDetailHeader from "./CartDetailHeader/CartDetailHeader";

const CartDetail = () => {
  const cartItems = useSelector(cartItemsSelector);
  //   console.log("Cart Items:", cartItems);
  return (
    <div className="cart-detail-container">
      <CartDetailHeader />
    </div>
  );
};

export default CartDetail;
