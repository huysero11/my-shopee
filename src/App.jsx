import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
