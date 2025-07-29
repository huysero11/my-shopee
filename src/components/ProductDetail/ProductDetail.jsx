import { Breadcrumb, Carousel, Col, Row, Space } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productListSelector } from "../../redux/selectors";
import {
  FaFacebookMessenger,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const productList = useSelector(productListSelector);
  const product = productList.find((item) => item.id === Number(id));

  const [like, setLike] = useState(0);

  // console.log("in productDetail.jsx, product: ", product);

  return (
    <>
      <div className="product-detail-breadcrumb">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Shopee",
            },
            {
              title: product.detail.category,
            },
            {
              title: product.name,
            },
          ]}
        />
      </div>
      <div className="product-detail-main">
        <div className="left">
          <div className="image-wrapper">
            <img src={product.image} />
          </div>

          <div className="product-detail-carousel-wrapper">
            <Carousel dots={false} arrows arrowSize={20}>
              <div style={{ height: "92px" }}>
                <Row gutter={[4, 0]} style={{ height: "100%" }}>
                  {[0, 1, 2, 3, 4, 5].map((item) => (
                    <Col key={item} span={4}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(252, 252, 252, 1)",
                        }}
                      >
                        <img
                          src={product.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Carousel>
          </div>

          <div className="product-detail-share">
            <div className="product-detail-share-left">
              <Space size={4}>
                Chia sẻ:
                <FaFacebookMessenger
                  className="product-detail-share-icons"
                  style={{ color: "rgba(46, 154, 241, 1)" }}
                />
                <FaFacebook
                  className="product-detail-share-icons"
                  style={{ color: "rgba(12, 81, 138, 1)" }}
                />
                <FaPinterest
                  className="product-detail-share-icons"
                  style={{ color: "rgba(245, 28, 28, 1)" }}
                />
                <FaTwitter
                  className="product-detail-share-icons"
                  style={{ color: "rgba(56, 188, 228, 1)" }}
                />
              </Space>
            </div>
            <div className="product-detail-share-right">
              <FaHeart
                className="product-detail-share-icons"
                onClick={() => setLike(1 - like)}
                style={like == 1 ? { color: "red" } : {}}
              />
              Đã thích {`(${like})`}
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div
        className="box"
        style={{
          height: "400px",
          backgroundColor: "white",
          margin: "20px 30px",
        }}
      ></div>
    </>
  );
};

export default ProductDetail;
