import { Rate, Pagination } from "antd";
import { UserOutlined } from "@ant-design/icons";
import MyPagination from "./MyPagination/MyPagination";
import { useState, useEffect } from "react";

import "./ProductRatings.css";

const ProductRatings = (props) => {
  const product = props.product;
  const buttons_stars = [0, 0, 0, 0, 0, 0];
  product.reviews.forEach((review) => {
    buttons_stars[review.rating]++;
  });

  const reviews_buttons_text = [
    "Tất cả",
    `5 Sao (${buttons_stars[5]})`,
    `4 Sao (${buttons_stars[4]})`,
    `3 Sao (${buttons_stars[3]})`,
    `2 Sao (${buttons_stars[2]})`,
    `1 Sao (${buttons_stars[1]})`,
    `Có bình luận (${product.reviews.length})`,
    "Có hình ảnh / Video (0)",
  ];

  let [reviews, setReviews] = useState(product.reviews);
  let [currentType, setCurrentType] = useState(0);

  const reviews_per_page = 1;
  const page_count = Math.ceil(reviews.length / reviews_per_page);
  const [currentPage, setCurrentPage] = useState(1);
  let [renderedReviews, setRenderedReviews] = useState([]);

  useEffect(() => {
    // console.log("Current Page: ", currentPage);
    const start = (currentPage - 1) * reviews_per_page;
    const end = currentPage * reviews_per_page;
    setRenderedReviews(reviews.slice(start, end));
    // setRenderedReviews((prevRenderedReviews) => {
    //   console.log("prevRenderedReviews reviews ", prevRenderedReviews);
    //   console.log("newRenderReviews ", reviews.slice(start, end));

    //   return reviews.slice(start, end);
    // });
  }, [currentPage, reviews]);

  const handleTypeButtonClick = (item) => {
    setCurrentType(item);
    setCurrentPage(1);
    if (1 <= item && item <= 6) {
      setReviews(product.reviews.filter((review) => review.rating === item));
    } else {
      setReviews(product.reviews);
    }
  };

  // console.log("reviews: ", reviews);

  return (
    <div className="product-ratings-container">
      <div className="product-ratings-title">ĐÁNH GIÁ SẢN PHẨM</div>
      <div className="product-ratings-result">
        <div className="product-ratings-result-left">
          <div className="product-ratings-result-left-avg">
            <span style={{ fontSize: "30px" }}>{product.detail.rating}</span>{" "}
            <span style={{ fontSize: "18px" }}>trên 5</span>
          </div>
          <div className="product-ratings-result-left-stars">
            <Rate allowHalf disabled defaultValue={product.detail.rating} />
          </div>
        </div>
        <div className="product-ratings-result-right">
          {[0, 5, 4, 3, 2, 1, 7, 6].map((item, index) => (
            <div
              key={item}
              className={`product-ratings-result-right-button ${item === currentType ? "active" : ""}`}
              onClick={() => {
                handleTypeButtonClick(item);
              }}
            >
              {reviews_buttons_text[index]}
            </div>
          ))}
        </div>
      </div>
      <div className="product-ratings-reviews">
        {renderedReviews.map((item, index) => (
          <div key={index} className="product-ratings-review-container">
            <div className="product-ratings-review-avatar">
              <div className="product-ratings-review-avatar-frame">
                <UserOutlined className="product-ratings-review-avatar-icon" />
              </div>
            </div>
            <div className="product-ratings-review-content">
              <div className="product-ratings-review-name">
                {item.reviewerName}
              </div>
              <div className="product-ratings-review-rate">
                <Rate
                  allowHalf
                  disabled
                  value={item.rating}
                  className="product-ratings-review-rate-stars"
                />
              </div>
              <div className="product-ratings-review-date">{item.date}</div>
              <div className="product-ratings-review-email">
                {item.reviewerEmail}
              </div>
              <div className="product-ratings-review-comment">
                {item.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="product-ratings-pagination">
        <MyPagination
          page_count={page_count}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductRatings;
