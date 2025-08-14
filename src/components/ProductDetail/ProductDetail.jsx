import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productListSelector } from "../../redux/selectors";
import { useState } from "react";
import ProductSeller from "../ProductSeller/ProductSeller.jsx";
import ProductDetailMain from "../ProductDetailMain/ProductDetailMain.jsx";
import ProductDesription from "../ProductDescription/ProductDesription.jsx";
import ProductRatings from "../ProductRatings/ProductRatings.jsx";
import PoppedUpNoti from "../../components/PoppedUpNoti/PoppedUpNoti";
import AppFooter from "../AppFooter/AppFooter";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const productList = useSelector(productListSelector);
  const product = productList.find((item) => item.id === Number(id));

  const [poppedUpNoti, setPoppedUpNoti] = useState(false);

  return (
    <>
      {poppedUpNoti && (
        <PoppedUpNoti message="Sản phẩm đã được thêm vào Giỏ hàng" />
      )}
      <ProductDetailMain product={product} setPoppedUpNoti={setPoppedUpNoti} />
      <ProductSeller product={product} />
      <ProductDesription product={product} />
      <ProductRatings product={product} />
      <AppFooter />

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

export default ProductDetail;
