import AppAdditionalBanners from "../components/AppAdditionalBanners/AppAdditionalBanners.jsx";
import AppBanners from "../components/AppBanners/AppBanners.jsx";
import AppCategories from "../components/AppCategories/AppCategories.jsx";
import AppFlashSale from "../components/AppFlashSale/AppFlashSale.jsx";
import AppHeader from "../components/AppHeader/AppHeader.jsx";
import AppShopeeMall from "../components/AppShopeeMall/AppShopeeMall.jsx";
import AppTodaySuggestion from "../components/AppTodaySuggestion/AppTodaySuggestion.jsx";
import AppTopSearching from "../components/AppTopSearching/AppTopSearching.jsx";

const HomePage = () => {
  return (
    <>
      <AppHeader />
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

export default HomePage;
