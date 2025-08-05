import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productListSelector } from "../../redux/selectors";

import ProductSeller from "../ProductSeller/ProductSeller.jsx";
import ProductDetailMain from "../ProductDetailMain/ProductDetailMain.jsx";
import ProductDesription from "../ProductDescription/ProductDesription.jsx";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const productList = useSelector(productListSelector);
  const product = productList.find((item) => item.id === Number(id));

  return (
    <>
      <ProductDetailMain product={product} />
      <ProductSeller product={product} />
      <ProductDesription product={product} />

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
