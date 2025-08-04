import {
  Breadcrumb,
  Carousel,
  Col,
  Row,
  Space,
  Rate,
  Tooltip,
  Button,
} from "antd";
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
import {
  QuestionCircleOutlined,
  CheckCircleOutlined,
  TruckOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const productList = useSelector(productListSelector);
  const product = productList.find((item) => item.id === Number(id));

  const [like, setLike] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const getOriginalPrice = (discountedPrice, discountPercentage) => {
    const res = (discountedPrice * 100) / (100 - discountPercentage);
    return res.toFixed(3);
  };

  const sizes = ["", "S", "M", "L", "XL", "XXL"];

  console.log("in productDetail.jsx, product: ", product);

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
        <div className="right">
          <div className="product-detail-name-wrapper">
            {product.name} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas sint rerum id maiores nam hic necessitatibus
          </div>
          <div className="product-detail-rating-wrapper">
            <div className="product-detail-rating-wrapper-left">
              <div className="product-detail-rating-item stars-wrapper">
                <span className="product-detail-rating-item-number">
                  {product.detail.rating}
                </span>
                <Rate disabled defaultValue={product.detail.rating} allowHalf />
              </div>
              <div className="product-detail-rating-item reviews-wrapper">
                <span className="product-detail-rating-item-number">
                  {product.reviews.length}
                </span>
                <span className="product-detail-right-text">Đánh giá</span>
              </div>
              <div className="product-detail-rating-item sale-figures-wrapper">
                <Space size={4}>
                  <span className="product-detail-right-text">Đã bán</span>
                  {product.reviews.length}
                  <Tooltip
                    placement="bottom"
                    title={
                      <span
                        style={{ color: "black" }}
                      >{`Đã bán ${product.reviews.length} tại Việt Nam`}</span>
                    }
                    color="rgba(243, 243, 243, 1)"
                  >
                    <QuestionCircleOutlined className="product-detail-right-text" />
                  </Tooltip>
                </Space>
              </div>
            </div>
            <div className="product-detail-rating-wrapper-right">
              <span className="product-detail-right-text">Tố cáo</span>
            </div>
          </div>
          <div className="product-detail-price-wrapper">
            <div className="product-detail-discounted-price">
              <sup style={{ textDecoration: "underline", marginRight: "4px" }}>
                đ
              </sup>
              {product.price}
              <CheckCircleOutlined
                style={{ fontSize: "15px", margin: "0 15px 0 5px" }}
              />
            </div>
            <div className="product-detail-original-price">
              <sup>đ</sup>
              {getOriginalPrice(
                product.price,
                product.detail.discountPercentage
              )}
            </div>
          </div>

          <div className="product-detail-classifier-wrapper">
            <div className="product-detail-transport-wrapper">
              <div className="product-detail-classifier-text">Vận chuyển</div>
              <div>
                <TruckOutlined className="product-detail-transport-icon" />
              </div>

              <div className="product-detail-transport-right">
                <div>
                  <div>{product.detail.shippingInformation}</div>
                </div>
                <div>
                  Phí ship 0
                  <sup
                    style={{ textDecoration: "underline", marginRight: "4px" }}
                  >
                    đ
                  </sup>
                </div>
                <div style={{ fontSize: "12px", color: "rgb(117, 117, 117)" }}>
                  Tặng Voucher{" "}
                  <sup
                    style={{ textDecoration: "underline", margin: "0 0 0 4px" }}
                  >
                    đ
                  </sup>
                  15.000 nếu đơn hàng giao sau thời gian trên{" "}
                </div>
              </div>
            </div>
            <div className="product-detail-category-wrapper">
              <div className="product-detail-type-wrapper">
                <div className="product-detail-classifier-text">Thể loại</div>
                <div className="product-detail-type-right">
                  {[1, 2, 3].map((item) => (
                    <div className="product-detail-type-right-item">
                      <div className="product-detail-type-right-item-image-wrapper">
                        <img src={product.image} />
                      </div>

                      {`Loại ${item}`}
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-detail-size-wrapper">
                <div className="product-detail-classifier-text">Kích thước</div>
                <div className="product-detail-size-right">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div className="product-detail-size-right-item">
                      {sizes[item]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-detail-quantity-wrapper">
                <div className="product-detail-classifier-text">Số lượng</div>
                <Space.Compact style={{ marginRight: "15px" }}>
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  />
                  <Button className="product-detail-quantity-button">
                    {quantity}
                  </Button>
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </Space.Compact>
                <div className="product-detail-classifier-text">CÒN HÀNG</div>
              </div>
            </div>
          </div>
          <div className="product-detail-buttons-wrapper">
            <button className="product-detail-buttons-add-to-cart">
              <ShoppingCartOutlined
                style={{ fontSize: "25px", marginRight: "5px" }}
              />
              Thêm Vào Giỏ Hàng
            </button>
            <button className="product-detail-buttons-buy">
              <div>Mua Với Voucher</div>
              <div style={{ fontSize: "18px" }}>
                <sup
                  style={{ textDecoration: "underline", marginRight: "4px" }}
                >
                  đ
                </sup>
                {product.price}
              </div>
            </button>
          </div>
        </div>
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
