import { Space } from "antd";
import ProductCardInCart from "../ProductCardInCard/ProductCardInCart";
import "./CartDetailBody.css";

const CartDetailBody = ({ cartItems }) => {
  console.log("cart detail body: ", cartItems);

  const menu_block_width = [58, 506.32, 173.74, 168.77, 114.18, 138.99];
  const menu_block_content = [
    <input type="checkbox" />,
    "Sản phẩm",
    "Đơn giá",
    "Số lượng",
    "Số tiền",
    "Thao tác",
  ];
  return (
    <div className="cart-detail-body-container">
      <div className="cart-detail-body-content">
        <div className="cart-detail-body-menu-block">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div
              className="cart-detail-body-menu-block-item"
              style={{ width: `${menu_block_width[item]}px` }}
            >
              {menu_block_content[item]}
            </div>
          ))}
        </div>
        <div className="cart-detail-body-items">
          {cartItems.map((item) => (
            <ProductCardInCart product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDetailBody;
