import "./ProductCard.css";
import DiscountTag from "../../components/ProductCard/tags/DiscountTag/DiscountTag.jsx";
import VoucherExtraTag from "../../components/ProductCard/tags/VoucherExtraTag/VoucherExtraTag.jsx";
import SieuReTag from "../../components/ProductCard/tags/SieuReTag/SieuReTag.jsx";
import TextTag from "../../components/ProductCard/tags/TextTag/TextTag.jsx";
import FlashSaleTag from "../../components/ProductCard/tags/FlashSaleTag/FlashSaleTag";
import ReVoDichTag from "../../components/ProductCard/tags/ReVoDichTag/ReVoDichTag.jsx";
import UnderTextDiscountTag from "../../components/ProductCard/tags/UnderTextDiscountTag/UnderTextDiscountTag.jsx";

const round3digit = (n) => {
  return n.toFixed(3);
};

function randomInt(L, R) {
  return Math.floor(Math.random() * (R - L + 1) + L);
}

const text_tag_name = ["Mall", "Yêu thích", "Yêu thích+"];

const ProductCard = (props) => {
  const product = props.info;
  // console.log("In ProductCard.jsx, product: ", product);
  return (
    <div className="product-card-container">
      <div className="product-card-inside-wrapper">
        <div className="product-card-image-wrapper">
          <img src={new URL(`${product.image}`, import.meta.url).href} />
          <DiscountTag percentage={product.detail.discountPercentage} />
          <VoucherExtraTag />
          <SieuReTag />
        </div>
        <div className="product-card-content-wrapper">
          <div className="product-card-name">
            <TextTag text={text_tag_name[randomInt(0, 2)]} />
            {product.name} Lorem ipsum dolor sit amet
          </div>
          <div className="product-card-tags">
            {/* <ReVoDichTag /> */}
            <UnderTextDiscountTag />
            <FlashSaleTag />
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
