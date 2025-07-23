import { Space, Button } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";

const FlashSaleTag = () => {
  return (
    <div className="flash-sale-tag-container">
      <Space.Compact style={{ height: "20px" }}>
        <ThunderboltOutlined
          style={{
            height: "20px",
            width: "20px",
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(244, 91, 57, 1)",
            justifyContent: "center",
          }}
        />
        <div
          style={{
            height: "20px",
            padding: "0 4px",
            fontSize: "10px",
            background:
              "linear-gradient(to right, #ff2f00ff 0%, #fe9178ff 20%)",
            borderRadius: "0 2px 2px 0",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          Đang bán chạy
        </div>
      </Space.Compact>
    </div>
  );
};

export default FlashSaleTag;
