import { Flex, Carousel, Image, Space, Typography } from "antd";
import "./AppBanners.css";

import image1 from "../../images/banners/image1.png";

const imageStyle = {
  width: "100%",
  height: "calc((450px - 20px) * 0.75)",
  backgroundColor: "orange",
  margin: 0,
  objectFit: "cover",
  objectPosition: "top",
};

const lower_part_image_path = [
  "magiamgia",
  "hangchongiahoi",
  "flashsale",
  "shopeestyle",
  "sanxu",
  "closecustomer",
];
const lower_part_text = [
  "Mã Giảm Giá",
  "Hàng Chọn\nGiá Hời",
  "Deal Hot\nGiờ Vàng",
  "Shopee Style Voucher 30%",
  "Săn Ngày 100.000 Xu",
  "Khách Hàng Thân Thiết",
];

const AppBanners = () => {
  return (
    <div className="app-banners-container">
      <div className="upper-part">
        <Flex gap={5} style={{ width: "100%", height: "100%" }}>
          <div
            style={{ width: "60%", height: "100%", backgroundColor: "green" }}
          >
            <Carousel className="upper-part-carousel" arrows autoplay>
              {[0, 1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div>
                    <img
                      src={
                        new URL(
                          `../../images/banners/carousel${item}.png`,
                          import.meta.url
                        ).href
                      }
                      style={imageStyle}
                    ></img>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div
            className="upper-part-right-banners"
            style={{ flex: "1", backgroundColor: "" }}
          >
            <Flex gap={5} vertical style={{ width: "100%", height: "100%" }}>
              {[0, 1].map((item) => {
                return (
                  <div>
                    <img
                      src={
                        new URL(
                          `../../images/banners/image${item}.png`,
                          import.meta.url
                        ).href
                      }
                    ></img>
                  </div>
                );
              })}
            </Flex>
          </div>
        </Flex>
      </div>
      <div className="lower-part">
        <Flex style={{ width: "100%", height: "100%" }} justify="space-around">
          {lower_part_image_path.map((item, index) => {
            return (
              <div className="box">
                <div className="image-part">
                  <img
                    src={
                      new URL(
                        `../../images/banners/${item}.png`,
                        import.meta.url
                      ).href
                    }
                  />
                </div>
                <div className="text-part">
                  <Typography.Text>{lower_part_text[index]}</Typography.Text>
                </div>
              </div>
            );
          })}
        </Flex>
      </div>
    </div>
  );
};

export default AppBanners;
