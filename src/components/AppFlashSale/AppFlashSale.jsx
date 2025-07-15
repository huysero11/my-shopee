import "./AppFlashSale.css";
import { Flex, Typography, Carousel, Row, Col, Badge } from "antd";
import MyCountdown from "./MyCountdown.jsx"; // Assuming MyCountdown is in the same directory
import { RightOutlined, ThunderboltOutlined } from "@ant-design/icons";

function randomFloat3(L, R) {
  const raw = L + Math.random() * (R - L);
  return Math.round(raw * 1000) / 1000;
}

function randomInt(L, R) {
  return Math.floor(Math.random() * (R - L + 1) + L);
}

const product_price = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
].map(() => randomFloat3(100, 1000));

const product_discount = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
].map(() => randomInt(15, 30));

const AppFlashSale = () => {
  return (
    <div className="flashsale-container">
      <Flex
        className="upper-part-container"
        justify="space-between"
        align="center"
      >
        <div key="1" className="left-part">
          <Typography.Title
            level={3}
            className="title"
            style={{ color: "rgb(255, 94, 36)" }}
          >
            <span style={{ fontWeight: "900", marginLeft: "15px" }}>
              F<ThunderboltOutlined />
              ASH
            </span>{" "}
            <span style={{ fontWeight: "700" }}>SALE</span>
          </Typography.Title>
          <MyCountdown />
        </div>
        <div
          key="2"
          className="right-part"
          style={{ color: "rgb(255, 94, 36)" }}
        >
          <Typography.Text className="text">Xem tất cả</Typography.Text>
          <RightOutlined />
        </div>
      </Flex>
      <div className="lower-part">
        <Carousel className="flashsale-carousel" arrows dots={false}>
          {[0, 1, 2].map((row_item) => {
            return (
              <div>
                <Row key={row_item}>
                  {[0, 1, 2, 3, 4, 5].map((col_item) => {
                    return (
                      <Col key={col_item} span={4}>
                        <div className="product-container">
                          <Badge.Ribbon
                            placement="start"
                            text="Mall"
                            color="#e61818"
                            style={{ fontWeight: 500 }}
                          >
                            <div className="image-container">
                              <img
                                src={
                                  new URL(
                                    `../../images/categories/${row_item * 6 + col_item < 10 ? `0${row_item * 6 + col_item}` : row_item * 6 + col_item}.png`,
                                    import.meta.url
                                  ).href
                                }
                              />
                              <div className="discount-badge">
                                <ThunderboltOutlined />
                                <span>
                                  {`-${product_discount[row_item * 6 + col_item]}%`}
                                </span>
                              </div>
                              <div className="date-badge">15.7</div>
                            </div>
                          </Badge.Ribbon>
                          <div className="product-price">
                            <div className="price">
                              <sup>đ</sup>
                              {product_price[row_item * 6 + col_item]}
                            </div>
                            <div className="status">ĐANG BÁN CHẠY</div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* <div
        className="box"
        style={{
          height: "400px",
          backgroundColor: "white",
          margin: "20px 30px",
        }}
      ></div> */}
    </div>
  );
};

export default AppFlashSale;
