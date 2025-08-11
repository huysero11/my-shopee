import TextTag from "../../ProductCard/tags/TextTag/TextTag";
import { PiChats } from "react-icons/pi";
import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import cartSlice from "../../../slices/cartSlice";
import {
  MinusOutlined,
  PlusOutlined,
  CaretDownOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import "./ProductCardInCart.css";

const ProductCardInCart = ({ product }) => {
  // console.log("in product card in cart: ", product);
  // const menu_block_width = [58, 506.32, 173.74, 168.77, 114.18, 138.99];

  const dispatch = useDispatch();

  const handleDecreaseQuantityButtonClicked = () => {
    dispatch(cartSlice.actions.decreaseQuantity(product.id));
  };

  const handleIncreaseQuantityButtonClicked = () => {
    dispatch(cartSlice.actions.increaseQuantity(product.id));
  };

  const handleDeleteTextClicked = () => {
    dispatch(cartSlice.actions.deleteProduct(product.id));
  };

  const handleCheckboxTicked = (id) => {
    dispatch(cartSlice.actions.tickCheckbox(id));
  };

  return (
    <div className="product-card-in-card-container">
      <div className="product-in-card-seller">
        <div className="product-in-card-seller-checkbox-wrapper">
          <input
            type="checkbox"
            onChange={() => handleCheckboxTicked(product.id)}
            checked={product.checked}
          />
        </div>
        <div className="product-in-card-seller-name-wrapper">
          <TextTag text={product.textTag} />
          <div className="product-in-card-seller-name">SHOPEE Store</div>
          <PiChats className="product-in-card-seller-chat-icon" />
        </div>
      </div>
      <div className="product-in-card-product-info">
        <div className="product-in-card-product-info-checkbox-wrapper">
          <input
            type="checkbox"
            onChange={() => handleCheckboxTicked(product.id)}
            checked={product.checked}
          />
        </div>
        <div className="product-in-card-product-info-name-wrapper">
          <div className="product-in-card-product-info-name-image-wrapper">
            <img src={product.image} />
          </div>
          <div className="product-in-card-product-info-name">
            {product.name}
          </div>
        </div>
        <div className="product-in-card-product-info-price-wrapper">
          <div className="product-in-card-product-info-price-original">
            {product.originalPrice ? `₫${product.originalPrice}` : ``}
          </div>
          <div className="product-in-card-product-info-price-discounted">
            {`₫${product.price.toFixed(3)}`}
          </div>
        </div>
        <div className="product-in-card-product-info-quantity-wrapper">
          <Space.Compact>
            <Button
              icon={<MinusOutlined />}
              onClick={handleDecreaseQuantityButtonClicked}
            />
            <Button className="product-detail-quantity-button">
              {product.quantity}
            </Button>
            <Button
              icon={<PlusOutlined />}
              onClick={handleIncreaseQuantityButtonClicked}
            />
          </Space.Compact>
        </div>
        <div className="product-in-card-product-info-price-to-pay-wrapper">
          {`₫${(product.price * product.quantity).toFixed(3)}`}
        </div>
        <div className="product-in-card-product-info-options">
          <div
            className="product-in-card-product-info-options-delete"
            onClick={handleDeleteTextClicked}
          >
            Xóa
          </div>
          <div className="product-in-card-product-info-options-find-similar-wrapper">
            <div className="product-in-card-product-info-options-find-similar">
              Tìm sản phẩm tương tự
            </div>
            <div className="product-in-card-product-info-options-find-similar-icon">
              <CaretDownOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className="product-in-card-shipping-voucher">
        <div className="product-in-card-shipping-voucher-icon-wrapper">
          <TruckOutlined className="product-in-card-shipping-voucher-icon" />
        </div>
        <div>
          Giảm ₫500.000 phí vận chuyển đơn tối thiểu ₫0; Giảm ₫1.000.000 phí vận
          chuyển đơn tối thiểu ₫500.000
        </div>
        <div className="product-in-card-shipping-voucher-text">
          Tìm hiểu thêm
        </div>
      </div>
    </div>
  );
};

export default ProductCardInCart;
