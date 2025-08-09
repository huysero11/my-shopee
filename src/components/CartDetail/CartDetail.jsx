import "./CartDetail.css";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "../../redux/selectors";
import CartDetailHeader from "./CartDetailHeader/CartDetailHeader";
import CartDetailBody from "./CartDetailBody/CartDetailBody";

const CartDetail = () => {
  const cartItems = useSelector(cartItemsSelector);
  //   console.log("Cart Items:", cartItems);
  return (
    <div className="cart-detail-container">
      <CartDetailHeader />
      <CartDetailBody cartItems={cartItems} />
    </div>
  );
};

export default CartDetail;
