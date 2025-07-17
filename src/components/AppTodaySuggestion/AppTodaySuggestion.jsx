import "./AppTodaySuggestion.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../slices/productsSlice.jsx";
import {
  productListSelector,
  productListStatusSelector,
  productListErrorSelector,
} from "../../redux/selectors.jsx";

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

  console.log("in AppTodaySuggestion.jsx, productList: ", productList);

  return (
    <>
      <div className="app-today-suggestion-container"></div>
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
