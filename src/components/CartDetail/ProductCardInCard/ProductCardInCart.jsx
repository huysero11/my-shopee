import TextTag from "../../ProductCard/tags/TextTag/TextTag";
import { PiChats } from "react-icons/pi";
import "./ProductCardInCart.css";

const ProductCardInCart = ({ product }) => {
  console.log("in product card in cart: ", product);
  return (
    <div className="product-card-in-card-container">
      <div className="product-in-card-seller">
        <div className="product-in-card-seller-checkbox-wrapper">
          <input type="checkbox" />
        </div>
        <div className="product-in-card-seller-name-wrapper">
          <TextTag text={product.textTag} />
          <div className="product-in-card-seller-name">SHOPEE Store</div>
          <PiChats className="product-in-card-seller-chat-icon" />
        </div>
      </div>
      <div className="product-in-card-product-info">
        <div className="product-in-card-product-info-checkbox-wrapper">
          <input type="checkbox" />
        </div>
      </div>
      <div className="product-in-card-shipping-voucher"></div>
    </div>
  );
};

export default ProductCardInCart;
