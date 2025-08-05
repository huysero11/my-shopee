import { FaUserCircle } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { PiStorefrontThin } from "react-icons/pi";
import TextTag from "../ProductCard/tags/TextTag/TextTag.jsx";
import "./ProductSeller.css";

function randomInt(L, R) {
  return Math.floor(Math.random() * (R - L + 1) + L);
}

const randomOnlineNumber = () => {
  const res = randomInt(0, 61);
  if (res == 0) {
    return `now`;
  } else if (res < 60) {
    return `${res} phút trước`;
  } else {
    return `${res - 60 + 1} giờ trước`;
  }
};

const product_seller_right_width = ["158.33px", "270.84px", "207.97px"];
const product_seller_right_text_left = [
  "Đánh Giá",
  "Tỉ Lệ Phản Hồi",
  "Tham Gia",
  "Sản Ghẩm",
  "Thời Gian Phản Hồi",
  "Người Theo Dõi",
];
const product_seller_right_text_right = [
  `${randomInt(1, 10)},${randomInt(1, 9)}k`,
  `${randomInt(95, 100)}%`,
  `${randomInt(1, 10)} năm trước`,
  `${randomInt(20, 200)}`,
  `trong vài giờ`,
  `${randomInt(1, 20)},${randomInt(1, 9)}k`,
];

const ProductSeller = (props) => {
  const product = props.product;
  return (
    <>
      <div className="product-seller-container">
        <div className="product-seller-inside-wrapper">
          <div className="product-seller-left">
            <div className="product-seller-left-avatar-part">
              <div className="product-seller-left-avatar-icon-wrapper">
                <FaUserCircle className="product-seller-left-avatar-icon" />
                <div className="product-seller-left-avatar-icon-tag">
                  <TextTag
                    text={
                      product.textTag == "Mall"
                        ? "Shopee Mall"
                        : product.textTag
                    }
                  />
                </div>
              </div>
            </div>
            <div className="product-seller-left-right">
              <div className="product-seller-name">SHOPEE SELLER NAME</div>
              <div className="product-seller-online-status">
                Online {randomOnlineNumber()}
              </div>
              <div className="product-seller-left-right-buttons-wrapper">
                <div className="product-seller-left-right-chat-now">
                  <IoMdChatboxes className="product-seller-left-right-chat-now-icon" />
                  <span>Chat Ngay</span>
                </div>
                <div className="product-seller-left-right-view-shop">
                  <PiStorefrontThin className="product-seller-left-right-view-shop-icon" />
                  <span>Xem Shop</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-seller-right">
            {[0, 1].map((row_key) => (
              <div className="product-seller-row" key={row_key}>
                {[0, 1, 2].map((col_key) => (
                  <div
                    className="product-seller-col"
                    key={col_key}
                    style={{
                      width: `${product_seller_right_width[col_key]}`,
                      //   backgroundColor: "red",
                      //   height: "100%",
                    }}
                  >
                    <div className="product-seller-col-left">
                      {product_seller_right_text_left[row_key * 3 + col_key]}
                    </div>
                    <div className="product-seller-col-right">
                      {product_seller_right_text_right[row_key * 3 + col_key]}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div
        className="box"
        style={{
          height: "400px",
          backgroundColor: "white",
          margin: "20px 30px",
        }}
      ></div> */}
    </>
  );
};

export default ProductSeller;
