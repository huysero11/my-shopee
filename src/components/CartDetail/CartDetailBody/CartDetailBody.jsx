import { TbTicket } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { QuestionCircleOutlined } from "@ant-design/icons";
import {
  totalQuantitySelector,
  totalPriceSelector,
  totalSelectedQuantitySelector,
} from "../../../redux/selectors";
import PoppedUpNoti from "../../PoppedUpNoti/PoppedUpNoti";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCheckboxTickedSelector } from "../../../redux/selectors";
import ProductCardInCart from "../ProductCardInCard/ProductCardInCart";
import cartSlice from "../../../slices/cartSlice";
import "./CartDetailBody.css";

const CartDetailBody = ({ cartItems }) => {
  // console.log("cart detail body: ", cartItems);

  const allCheckboxTicked = useSelector(allCheckboxTickedSelector);

  // console.log("in cartDetailBody, allCheckboxTick = ", allCheckboxTicked);

  const dispatch = useDispatch();
  const handleAllCheckboxTicked = () => {
    dispatch(cartSlice.actions.tickAllCheckbox());
  };

  const menu_block_width = [58, 506.32, 173.74, 168.77, 114.18, 138.99];
  const menu_block_content = [
    <input
      type="checkbox"
      onChange={handleAllCheckboxTicked}
      checked={allCheckboxTicked}
    />,
    "Sản phẩm",
    "Đơn giá",
    "Số lượng",
    "Số tiền",
    "Thao tác",
  ];

  const totalQuantity = useSelector(totalQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);
  const totalSelectedQuantity = useSelector(totalSelectedQuantitySelector);

  const [poppedUpNoti, setPoppedUpNoti] = useState(false);

  const handleBuyButtonClicked = () => {
    if (totalSelectedQuantity == 0) {
      return;
    }

    setPoppedUpNoti(true);
    setTimeout(() => {
      setPoppedUpNoti(false);
    }, 3000);

    dispatch(cartSlice.actions.buy());
  };

  return (
    <div className="cart-detail-body-container">
      {poppedUpNoti && <PoppedUpNoti message="Mua thành công" />}
      <div className="cart-detail-body-content">
        <div className="cart-detail-body-menu-block">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
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
        <div className="cart-detail-body-buying-block">
          <div className="cart-detail-body-buying-first-block">
            <div className="cart-detail-body-buying-first-block-content">
              <div className="cart-detail-body-buying-first-block-content-first-item">
                <span>
                  <TbTicket className="cart-detail-body-buying-first-block-content-first-item-icon" />
                </span>
                <span>Shopee Voucher</span>
              </div>
              <div className="cart-detail-body-buying-first-block-content-second-item">
                Chọn hoặc nhập mã
              </div>
            </div>
          </div>
          <div className="cart-detail-body-buying-second-block">
            <div className="cart-detail-body-buying-second-block-content">
              <input type="checkbox" />
              <div className="cart-detail-body-buying-second-block-content-main">
                <div className="cart-detail-body-buying-second-block-content-main-left">
                  <BsCoin className="cart-detail-body-buying-second-block-content-main-left-coin-icon" />
                  <span style={{ marginLeft: "8px" }}>Shopee Xu</span>
                  <span
                    style={{ marginLeft: "17px", color: "rgba(0, 0, 0, 0.54)" }}
                  >
                    Dùng 600 Shopee Xu
                  </span>
                  <span>
                    <QuestionCircleOutlined
                      className="cart-detail-body-buying-second-block-content-mainleft-question-icon"
                      style={{
                        marginLeft: "6px",
                        fontSize: "12px",
                        color: "rgba(0, 0, 0, 0.54)",
                        cursor: "pointer",
                      }}
                    />
                  </span>
                </div>
                <div
                  style={{ marginRight: "30px", color: "rgba(0, 0, 0, 0.54)" }}
                >
                  -₫600
                </div>
              </div>
            </div>
          </div>
          <div className="cart-detail-body-buying-third-block">
            <div className="cart-detail-body-buying-third-block-left">
              <div className="cart-detail-body-buying-third-block-left-input-wrapper">
                <input
                  type="checkbox"
                  onChange={handleAllCheckboxTicked}
                  checked={allCheckboxTicked}
                />
              </div>
              <div className="cart-detail-body-buying-third-block-left-text-1">
                {`Chọn Tất Cả (${totalQuantity})`}
              </div>
              <div className="cart-detail-body-buying-third-block-left-text-2">
                Xóa
              </div>
              <div className="cart-detail-body-buying-third-block-left-text-3">
                Lưu vào mục Đã thích
              </div>
            </div>
            <div className="cart-detail-body-buying-third-block-right">
              <div className="cart-detail-body-buying-third-block-right-text">
                {`Tổng cộng (${totalSelectedQuantity} Sản phẩm):`}
              </div>
              <div className="cart-detail-body-buying-third-block-right-total-money">
                {`₫${totalPrice.toFixed(3)}`}
              </div>
              <div
                className="cart-detail-body-buying-third-block-right-buy-button"
                onClick={handleBuyButtonClicked}
              >
                Mua hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetailBody;
