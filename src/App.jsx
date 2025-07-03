import AppHeader from "./components/AppHeader/AppHeader.jsx";
import { Affix } from "antd";
import "./App.css";

const App = () => {
  return (
    <>
      <Affix offsetTop={0} style={{ zIndex: 1000 }}>
        <AppHeader />
      </Affix>
    </>
  );
};

export default App;
