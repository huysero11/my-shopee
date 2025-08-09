import { Divider, Dropdown, Space } from "antd";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import {
  BellOutlined,
  DownOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./CartDetailHeader.css";

const pre_icon = [
  <BellOutlined />,
  <QuestionCircleOutlined />,
  <GlobalOutlined />,
  <UserOutlined />,
];
const upper_right_text = [`Thông báo`, `Hỗ trợ`, `Tiếng Việt`, "huyndq_05"];
const nex_icon = [
  <></>,
  <></>,
  <Dropdown
    menu={{
      items: [
        { key: "vi", label: "Tiếng Việt" },
        { key: "en", label: "English" },
      ],
    }}
    arrow={{ pointAtCenter: true }}
    placement="bottomRight"
  >
    <DownOutlined />
  </Dropdown>,
  <></>,
];

const CartDetailHeader = () => {
  const navigate = useNavigate();

  const handleLogoClicked = () => {
    navigate("/");
  };

  return (
    <div className="cart-detail-header-container">
      <div className="cart-detail-header-upper">
        <div className="cart-detail-header-upper-left">
          <div className="cart-detail-header-upper-text">Kênh người bán</div>
          <Divider
            type="vertical"
            className="cart-detail-header-upper-divider"
          />
          <div className="cart-detail-header-upper-text">Tải ứng dụng</div>
          <Divider
            type="vertical"
            className="cart-detail-header-upper-divider"
          />
          <div className="cart-detail-header-upper-text">Kết nối</div>
          <div>
            <FaFacebook className="cart-detail-header-upper-left-icon" />
            <GrInstagram className="cart-detail-header-upper-left-icon" />
          </div>
        </div>
        <div className="cart-detail-header-upper-right">
          <Space size={10}>
            {[0, 1, 2, 3].map((item) => (
              <div>
                <Space size={4}>
                  <div className="cart-detail-header-upper-right-icon">
                    {pre_icon[item]}
                  </div>

                  <div className="cart-detail-header-upper-text">
                    {upper_right_text[item]}
                  </div>

                  <div className="cart-detail-header-upper-right-icon">
                    {nex_icon[item]}
                  </div>
                </Space>
              </div>
            ))}
          </Space>
        </div>
      </div>
      <div className="cart-detail-header-lower">
        <div className="cart-detail-header-lower-inside">
          <div className="cart-detail-header-lower-inside-left">
            <div
              className="cart-detail-header-lower-inside-left-image-wrapper"
              onClick={handleLogoClicked}
            >
              <img
                src={
                  new URL(`../../../images/shopee_logo_1.png`, import.meta.url)
                    .href
                }
              />
            </div>
            <Divider
              type="vertical"
              className="cart-detail-header-lower-inside-left-divider"
            />
            <div className="cart-detail-header-lower-inside-left-text">
              Giỏ Hàng
            </div>
          </div>
          <div className="cart-detail-header-lower-inside-right">
            <div className="cart-detail-header-lower-inside-right-search-bar">
              <div className="cart-detail-header-lower-inside-right-search-bar-left">
                <input placeholder="voucher thời trang 777.000Đ" />
              </div>

              <div className="cart-detail-header-lower-inside-right-search-bar-right">
                <button className="cart-detail-header-lower-inside-right-search-bar-right-button">
                  <SearchOutlined className="cart-detail-header-lower-inside-right-search-bar-right-button-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetailHeader;
