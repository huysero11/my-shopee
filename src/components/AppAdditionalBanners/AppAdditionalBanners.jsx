import { Col, Row } from "antd";
import "./AppAdditionalBanners.css";

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: "5px",
};

const AppAdditionalBanners = () => {
  return (
    <>
      <div className="app-additional-banners">
        <Row gutter={[8, 0]}>
          {[1, 2, 3].map((item) => {
            return (
              <Col key={item} span={8} style={{ height: "110px" }}>
                <img
                  src={
                    new URL(
                      `../../images/banners/carousel${item}.png`,
                      import.meta.url
                    )
                  }
                  style={imageStyle}
                />
              </Col>
            );
          })}
        </Row>
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

export default AppAdditionalBanners;
