import { Row, Col, Space, Divider } from "antd";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { SiAppgallery } from "react-icons/si";
import "./AppFooter.css";

const AppFooter = () => {
  const col_span = [5, 5, 5, 5, 4];
  const first_block_title = [
    "DỊCH VỤ KHÁCH HÀNG",
    "SHOPEE VIỆT NAM",
    "THANH TOÁN",
    "THEO DÕI SHOPEE",
    "TẢI ỨNG DỤNG SHOPEE",
  ];

  const first_block_text = [
    [
      "Trung Tâm Trợ Giúp Shopee",
      "Shopee Blog",
      "Shopee Mall",
      "Hướng Dẫn Mua Hàng/Đặt Hàng",
      "Hướng Dẫn Bán Hàng",
      "Ví ShopeePay",
      "Shopee Xu",
      "Đơn Hàng",
      "Trả Hàng/Hoàn Tiền",
      "Liên Hệ Shopee",
      "Chính Sách Bảo Hành",
    ],
    [
      "Về Shopee",
      "Tuyển Dụng",
      "Điều Khoản Shopee",
      "Chính Sách Bảo Mật",
      "Shopee Mall",
      "Kênh Người Bán",
      "Flash Sale",
      "Tiếp Thị Liên Kết",
      "Liên Hệ Truyền Thông",
    ],
    [
      "VISA",
      "UCB",
      "AMERICAN EXPRESS",
      "SPayLater",
      "SPX",
      "viettel post",
      "vietnam post",
      "J&T Express",
    ],
    [
      <>
        <FaFacebook className="app-footer-content-block-1-col-content-texts-icon" />{" "}
        <span>Facebook</span>
      </>,
      <>
        <RiInstagramFill className="app-footer-content-block-1-col-content-texts-icon" />{" "}
        <span>Instagram</span>
      </>,
      <>
        <TbBrandLinkedinFilled className="app-footer-content-block-1-col-content-texts-icon" />{" "}
        <span>LinkedIn</span>
      </>,
    ],
    [
      <>
        <FaApple className="app-footer-content-block-1-col-content-texts-icon" />{" "}
        <span>Apple Store</span>
      </>,
      <>
        <FaGooglePlay className="app-footer-content-block-1-col-content-texts-icon" />{" "}
        <span>Google Play</span>
      </>,
      <>
        <SiAppgallery className="app-footer-content-block-1-col-content-texts-icon" />{" "}
        <span>AppGallery</span>
      </>,
    ],
  ];

  const second_block_text = [
    "Quốc gia & Khu vực: Singapore",
    "Indonesia",
    "Thái Lan",
    "Malaysia",
    "Việt Nam",
    "Philippines",
    "Brazil",
    "México",
    "Colombia",
    "Chile",
    "Đài Loan",
  ];

  const third_block_text = [
    "Công ty TNHH Shopee",
    "Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với Shopee ngay trên Trung tâm trợ giúp",
    "Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn",
    "Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015",
    "© 2015 - Bản quyền thuộc về Công ty TNHH Shopee",
  ];

  return (
    <div className="app-footer-container">
      <div className="app-footer-content">
        <div className="app-footer-content-block-1">
          <Row className="app-footer-content-block-1-row" gutter={[4, 4]}>
            {[0, 1, 2, 3, 4].map((item) => (
              <Col
                key={item}
                span={col_span[item]}
                className="app-footer-content-block-1-col"
              >
                <div className="app-footer-content-block-1-col-content">
                  <div className="app-footer-content-block-1-col-content-title">
                    {first_block_title[item]}
                  </div>
                  <div className="app-footer-content-block-1-col-content-texts">
                    {first_block_text[item].map((item, index) => (
                      <div
                        key={index}
                        className={`app-footer-content-block-1-col-content-texts-item`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="app-footer-content-block-2">
          <div>© 2025 Shopee. Tất cả các quyền được bảo lưu.</div>
          <Space
            size={0}
            split={
              <Divider
                type="vertical"
                style={{
                  borderInlineStartColor: "rgba(0,0,0,0.2)",
                }}
              />
            }
          >
            {second_block_text.map((item, index) => (
              <span key={index} style={{ whiteSpace: "nowrap" }}>
                {item}
              </span>
            ))}
          </Space>
        </div>
      </div>
      <div className="app-footer-content-block-3-wrapper">
        <div className="app-footer-content-block-3">
          <div className="app-footer-content-block-3-block-1">
            <Space
              split={
                <Divider
                  type="vertical"
                  style={{
                    borderInlineStartColor: "rgba(0,0,0,0.2)",
                  }}
                />
              }
            >
              <span>CHÍNH SÁCH BẢO MẬT</span>
              <span>QUY CHẾ HOẠT ĐỘNG</span>
              <span>CHÍNH SÁCH VẬN CHUYỂN</span>
              <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
            </Space>
          </div>
          <div className="app-footer-content-block-3-block-2">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="app-footer-content-block-3-block-2-image-wrapper"
              >
                <img src="https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-dang-ky-bo-cong-thuong.png" />
              </div>
            ))}
          </div>
          <div className="app-footer-content-block-3-block-3">
            {third_block_text.map((item, index) => (
              <div
                key={index}
                className="app-footer-content-block-3-block-3-item"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
