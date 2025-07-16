import "./AppShopeeMall.css";
import { Typography, Divider, Space, Row, Col, Carousel } from "antd";
import {
  RollbackOutlined,
  CheckCircleOutlined,
  TransactionOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const carousel_text = [
  "Ưu đãi đến 50%",
  "Mua 1 tặng 1",
  "Mua 1 được 2",
  "Mua 1 được 6",
  "Mua 1 tặng 1",
  "Mua 1 tặng 1",
  "Mua là có quà",
  "Deli siêu sale",
  "Mua 1 tặng 1",
  "Mua là có quà",
  "Thời trang -50%",
  "Quà mọi đơn",
  "Mua là có quà",
  "Mua là có quà",
  "Mua là có quà",
  "Thời trang -50%",
];

const AppShopeeMall = () => {
  return (
    <>
      <div className="shopee-mall-container">
        <div className="upper-part">
          <div className="left">
            <Space className="upper-part-left-space" size={15}>
              <Typography.Text className="shopee-mall-text">
                SHOPEE MALL
                <Divider type="vertical" className="divider" />
              </Typography.Text>

              <Typography.Text className="upper-part-left-text">
                <RollbackOutlined
                  className="upper-part-left-icon"
                  style={{ marginRight: "6px" }}
                />
                Trả Hàng Miễn Phí 15 Ngày
              </Typography.Text>

              <Typography.Text className="upper-part-left-text">
                <CheckCircleOutlined
                  className="upper-part-left-icon"
                  style={{ marginRight: "6px" }}
                />
                Hàng Chính Hãng 100%
              </Typography.Text>

              <Typography.Text className="upper-part-left-text">
                <TransactionOutlined
                  className="upper-part-left-icon"
                  style={{ marginRight: "6px" }}
                />
                Miễn Phí Vận Chuyển
              </Typography.Text>
            </Space>
          </div>
          <div className="right">
            <span className="upper-part-right-text">Xem Tất Cả</span>
            <RightCircleOutlined className="upper-part-right-icon" />
          </div>
        </div>
        <div className="lower-part">
          <Row key="" style={{ height: "100%" }}>
            <Col span={8} className="lower-part-banner">
              <img
                src={
                  new URL(`../../images/banners/carousel0.png`, import.meta.url)
                    .href
                }
              />
            </Col>
            <Col span={16} className="lower-part-products">
              <Carousel className="lower-part-carousel" arrows autoplay>
                {[0, 1].map((slide_item) => (
                  <div key={slide_item}>
                    <Row gutter={[5, 5]}>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <Col key={i} span={6}>
                          <div className="product-container">
                            <div className="image-wrapper">
                              <div className="image1-wrapper">
                                <img
                                  className="image1"
                                  src={
                                    new URL(
                                      `../../images/categories/${slide_item * 8 + i < 10 ? `0${slide_item * 8 + i}` : slide_item * 8 + i}.png`,
                                      import.meta.url
                                    ).href
                                  }
                                />
                              </div>

                              <div className="image2-wrapper">
                                <img
                                  className="image2"
                                  src={
                                    new URL(
                                      `../../images/categories/${slide_item * 8 + i < 10 ? `0${slide_item * 8 + i}` : slide_item * 8 + i}.png`,
                                      import.meta.url
                                    ).href
                                  }
                                />
                              </div>
                            </div>
                            <div className="text-wrapper">
                              {carousel_text[slide_item * 8 + i]}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
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

export default AppShopeeMall;
