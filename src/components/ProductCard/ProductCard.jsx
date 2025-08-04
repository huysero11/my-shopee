import { useNavigate } from "react-router-dom";
import DateTag from "../../components/ProductCard/tags/DateTag/DateTag.jsx";
import DiscountTag from "../../components/ProductCard/tags/DiscountTag/DiscountTag.jsx";
import FlashSaleTag from "../../components/ProductCard/tags/FlashSaleTag/FlashSaleTag";
import ReVoDichTag from "../../components/ProductCard/tags/ReVoDichTag/ReVoDichTag.jsx";
import SieuReTag from "../../components/ProductCard/tags/SieuReTag/SieuReTag.jsx";
import TextTag from "../../components/ProductCard/tags/TextTag/TextTag.jsx";
import UnderTextDiscountTag from "../../components/ProductCard/tags/UnderTextDiscountTag/UnderTextDiscountTag.jsx";
import VoucherExtraTag from "../../components/ProductCard/tags/VoucherExtraTag/VoucherExtraTag.jsx";

import "./ProductCard.css";

const round3digit = (n) => {
  return n.toFixed(3);
};

function randomInt(L, R) {
  return Math.floor(Math.random() * (R - L + 1) + L);
}

const ProductCard = (props) => {
  const product = props.info;
  const navigate = useNavigate();

  const handleProductCardClicked = () => {
    navigate(`/product-detail/${props.info.id}`);
  };
  // console.log("In ProductCard.jsx, product: ", product.detail.brand);
  return (
    <div className="product-card-container">
      <div
        className="product-card-inside-wrapper"
        onClick={handleProductCardClicked}
      >
        <div className="product-card-image-wrapper">
          <img src={new URL(`${product.image}`, import.meta.url).href} />
          <DiscountTag percentage={product.detail.discountPercentage} />
          <div className="tags-wrapper">
            {randomInt(0, 1) === 1 ? <DateTag /> : <></>}
            {randomInt(0, 1) === 1 ? <VoucherExtraTag /> : <></>}
            {randomInt(0, 1) === 1 ? <SieuReTag /> : <></>}
          </div>
        </div>
        <div className="product-card-content-wrapper">
          <div className="product-card-name">
            <TextTag text={product.textTag} />
            {product.name} Lorem ipsum dolor sit amet
          </div>
          <div className="product-card-tags-wrapper">
            {randomInt(0, 1) === 1 ? (
              <FlashSaleTag />
            ) : (
              [
                randomInt(0, 1) === 1 ? (
                  <UnderTextDiscountTag amount={randomInt(5, 30)} />
                ) : (
                  <></>
                ),
                randomInt(0, 1) === 1 ? <ReVoDichTag /> : <></>,
              ]
            )}
          </div>
          <div className="product-card-price">
            <sup>đ</sup>
            {round3digit(product.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
