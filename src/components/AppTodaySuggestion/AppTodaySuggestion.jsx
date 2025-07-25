import "./AppTodaySuggestion.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Row, Spin } from "antd";
import { fetchProducts } from "../../slices/productsSlice.jsx";
import {
  productListSelector,
  productListStatusSelector,
  productListErrorSelector,
} from "../../redux/selectors.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const AppTodaySuggestion = () => {
  const status = useSelector(productListStatusSelector);
  const error = useSelector(productListErrorSelector);
  const productList = useSelector(productListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  // console.log("in AppTodaySuggestion.jsx, productList: ", productList);

  if (status === "loading") {
    return (
      <div
        className="box"
        style={{
          height: "400px",
          backgroundColor: "white",
          margin: "20px 30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Spin size="large" style={{ marginTop: "50px" }} />
      </div>
    );
  }

  return (
    <>
      <div className="app-today-suggestion-container">
        <div className="app-today-suggestion-header">GỢI Ý HÔM NAY</div>
        <div className="app-today-suggestion-body">
          <Row gutter={[0, 0]}>
            {productList.map((product_info, index) => {
              return (
                <Col key={index} span={4}>
                  <ProductCard info={product_info} />
                </Col>
              );
            })}
          </Row>
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

export default AppTodaySuggestion;
