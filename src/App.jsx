import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppBanners from "./components/AppBanners/AppBanners.jsx";
import AppCategories from "./components/AppCategories/AppCategories.jsx";
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
    </>
  );
};

export default App;
