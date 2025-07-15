import "./AppShopeeMall.css";
import { Typography, Divider, Space } from "antd";
import {
  RollbackOutlined,
  CheckCircleOutlined,
  TransactionOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const AppShopeeMall = () => {
  return (
    <>
      <div className="shopee-mall-container">
        <div className="upper-part">
          <div className="left">
            <Space className="upper-part-left-space" size={15}>
              <Typography.Text className="shopee-mall-text">
                SHOPEE MALL
                <Divider type="vertical" />
              </Typography.Text>

              <Typography.Text className="upper-part-left-text">
                <RollbackOutlined
                  className="upper-part-left-icon"
                  style={{ marginRight: "6px" }}
                />
                Trả Hàng Miễn Phí 15 Ngày
              </Typography.Text>

              <Typography.Text className="upper-part-left-text">
                <CheckCircleOutlined
                  className="upper-part-left-icon"
                  style={{ marginRight: "6px" }}
                />
                Hàng Chính Hãng 100%
              </Typography.Text>

              <Typography.Text className="upper-part-left-text">
                <TransactionOutlined
                  className="upper-part-left-icon"
                  style={{ marginRight: "6px" }}
                />
                Miễn Phí Vận Chuyển
              </Typography.Text>
            </Space>
          </div>
          <div className="right">
            <span className="upper-part-right-text">Xem Tất Cả</span>
            <RightCircleOutlined className="upper-part-right-icon" />
          </div>
        </div>
        <div className="lower-part"></div>
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

export default AppShopeeMall;
