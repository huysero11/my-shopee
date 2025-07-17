import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppBanners from "./components/AppBanners/AppBanners.jsx";
import AppCategories from "./components/AppCategories/AppCategories.jsx";
import AppFlashSale from "./components/AppFlashSale/AppFlashSale.jsx";
import AppAdditionalBanners from "./components/AppAdditionalBanners/AppAdditionalBanners.jsx";
import AppShopeeMall from "./components/AppShopeeMall/AppShopeeMall.jsx";
import AppTopSearching from "./components/AppTopSearching/AppTopSearching.jsx";
import AppTodaySuggestion from "./components/AppTodaySuggestion/AppTodaySuggestion.jsx";
import { Affix } from "antd";
import "./App.css";

const App = () => {
  return (
    <>
      <Affix offsetTop={0} style={{ zIndex: 1000 }}>
        <AppHeader />
      </Affix>
      <AppBanners />
      <AppCategories />
      <AppFlashSale />
      <AppAdditionalBanners />
      <AppShopeeMall />
      <AppTopSearching />
      <AppTodaySuggestion />
    </>
  );
};

export default App;
