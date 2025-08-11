import "./CartDetail.css";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "../../redux/selectors";
import CartDetailHeader from "./CartDetailHeader/CartDetailHeader";
import CartDetailBody from "./CartDetailBody/CartDetailBody";
import AppFooter from "../../components/AppFooter/AppFooter";

const CartDetail = () => {
  const cartItems = useSelector(cartItemsSelector);
  //   console.log("Cart Items:", cartItems);
  return (
    <div className="cart-detail-container">
      <CartDetailHeader />
      <CartDetailBody cartItems={cartItems} />
      <AppFooter />
    </div>
  );
};

export default CartDetail;
