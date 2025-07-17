import "./AppTopSearching.css";
import { RightOutlined } from "@ant-design/icons";
import { Carousel, Row, Col } from "antd";

const product_text = [
  "Áo Đá Bóng",
  "Bộ Quần Áo Cầu Lông",
  "Vợt Cầu Lông",
  "Giày Đá Bóng",
  "Bóng Đá",
  "Áo Thun Local Brand",
  "Áo Thun Form Rộng",
  "Áo Sơ Mi Ngắn Tay",
  "Đũa Inox",
  "Sữa Rửa Mặt Cerave",
  "Kem Chống Nắng",
  "Áo Thun Polo Nam Tay Ngắn",
];

function randomInt(L, R) {
  return Math.floor(Math.random() * (R - L + 1) + L);
}
const product_sales_figures = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
].map(() => randomInt(15, 50));

const AppTopSearching = () => {
  return (
    <>
      <div className="app-top-searching-container">
        <div className="upper-part">
          <div className="left">TÌM KIẾM HÀNG ĐẦU</div>
          <div className="right">
            Xem Tất Cả
            <RightOutlined />
          </div>
        </div>
        <div className="lower-part">
          <Carousel arrows>
            {[0, 1].map((slide_item) => (
              <div key={slide_item}>
                <Row gutter={[5, 0]}>
                  {[0, 1, 2, 3, 4, 5].map((col_item) => (
                    <Col key={col_item} span={4}>
                      <div className="product-container">
                        <div className="image-wrapper">
                          <img
                            src={
                              new URL(
                                `../../images/categories/${slide_item * 6 + col_item < 10 ? `0${slide_item * 6 + col_item}` : slide_item * 6 + col_item}.png`,
                                import.meta.url
                              ).href
                            }
                          />
                          <div className="top-badge">TOP</div>
                          <div className="sales-figures">
                            <span style={{ opacity: "1", color: "white" }}>
                              Bán{" "}
                              {product_sales_figures[slide_item * 6 + col_item]}
                              k+ / tháng
                            </span>
                          </div>
                        </div>
                        <div className="text-wrapper">
                          {product_text[slide_item * 6 + col_item]}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
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

export default AppTopSearching;
