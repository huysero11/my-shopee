import {
  BellOutlined,
  DownOutlined,
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Divider,
  Dropdown,
  Flex,
  Image,
  Input,
  Space,
} from "antd";
import Logo from "../../images/shopee_logo.png";
import "./AppHeader.css";

const AppHeader = () => {
  return (
    <>
      <Affix offsetTop={0} style={{ zIndex: 1000 }}>
        <Flex className="app-header-container" vertical>
          <Flex className="app-header-upper-part" justify="space-between">
            <Flex className="upper-part-left" align="center">
              <span className="upper-part-option">Kênh người bán</span>
              <Divider type="vertical" className="divider" />
              <span className="upper-part-option">Tải ứng dụng</span>
              <Divider type="vertical" className="divider" />
              <Space size={4}>
                <span className="upper-part-option no-hover">Kết nối</span>
                <FacebookOutlined
                  className="upper-part-option facebook-icon"
                  style={{
                    borderRadius: "10px",
                    color: "rgb(255, 68, 0)",
                    backgroundColor: "white",
                  }}
                />
                <InstagramOutlined
                  className="upper-part-option instagram-icon"
                  style={{
                    borderRadius: "10px",
                    color: "rgb(255, 68, 0)",
                    backgroundColor: "white",
                  }}
                />
              </Space>
            </Flex>
            <Flex className="upper-part-right" align="center">
              <Space size={4}>
                <BellOutlined />

                <span className="upper-part-option">Thông báo</span>
              </Space>

              <Space size={4}>
                <QuestionCircleOutlined />
                <span className="upper-part-option">Trợ giúp</span>
              </Space>

              <Space size={4}>
                <Dropdown
                  menu={{
                    items: [
                      { key: "vi", label: "Tiếng Việt" },
                      { key: "en", label: "English" },
                    ],
                  }}
                  arrow={{ pointAtCenter: true }}
                >
                  <Space size={4} style={{ cursor: "pointer" }}>
                    <GlobalOutlined />
                    <span className="upper-part-option no-margin">
                      Tiếng Việt
                    </span>
                    <DownOutlined style={{ marginRight: "10px" }} />
                  </Space>
                </Dropdown>
              </Space>

              <Dropdown
                menu={{
                  items: [
                    { key: "my-account", label: "Tài khoản của tôi" },
                    { key: "my-orders", label: "Đơn mua" },
                    { key: "sign-out", label: "Đăng xuất" },
                  ],
                }}
                arrow={{ pointAtCenter: true }}
                placement="bottomRight"
              >
                <Space size={4}>
                  <Avatar size="small" icon={<UserOutlined />} />
                  <span className="upper-part-option">Huyndq_05</span>
                </Space>
              </Dropdown>
            </Flex>
          </Flex>
          <Flex
            className="app-header-lower-part"
            style={{ height: "70%" }}
            flex="1"
          >
            <Flex
              className="logo-container"
              style={{ width: "20%", height: "100%" }}
            >
              <Image
                src={Logo}
                preview={false}
                style={{
                  height: "100%",
                }}
              />
            </Flex>

            <Flex className="search-container" flex="1" vertical justify="end">
              <div className="search-bar">
                <Input
                  className="input-text-area"
                  placeholder="FREESHIP 0Đ mọi đơn (*)"
                />
                <Button
                  className="search-button"
                  type="primary"
                  style={{
                    width: "60px",
                    height: "100%",
                    borderRadius: "3px",
                    backgroundColor: "rgb(255, 68, 0)",
                    marginLeft: "2px",
                  }}
                >
                  <SearchOutlined style={{ fontSize: "17px" }} />
                </Button>
              </div>
              <Flex
                justify="space-around"
                style={{ fontSize: "13px", padding: "5px 0" }}
              >
                <span className="lower-part-option">Dây đeo kính</span>
                <span className="lower-part-option">Áo sơ mi nam tay ngắn</span>
                <span className="lower-part-option">Eric Emanuel</span>
                <span className="lower-part-option">Owl Brand</span>
                <span className="lower-part-option">Rubik 3x3 Magnetic</span>
                <span className="lower-part-option">Áo sơ mi Linen</span>
                <span className="lower-part-option">Cristiano Ronaldo</span>
              </Flex>
            </Flex>

            <Flex
              className="cart-icon-container"
              style={{
                width: "15%",
                boxSizing: "border-box",
                paddingLeft: "50px",
              }}
              align="center"
            >
              <Badge
                count={5}
                size="small"
                offset={[-2, 3]}
                style={{
                  color: "rgb(244, 97, 44)",
                  backgroundColor: "white",
                }}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "30px", color: "white" }}
                />
              </Badge>
            </Flex>
          </Flex>
        </Flex>
      </Affix>
    </>
  );
};

export default AppHeader;
