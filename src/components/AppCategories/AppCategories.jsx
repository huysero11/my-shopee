import "./AppCategories.css";
import { Typography, Flex, Row, Col } from "antd";

const category_name = [
  [
    "Thời Trang Nam",
    "Điện thoại & Phụ Kiện",
    "Thiết Bị Điện Tử",
    "Máy Tính & Laptop",
    "Máy Ảnh & Máy Quay Phim",
    "Đồng Hồ",
    "Giày Dép Nam",
    "Thiết Bị Điện Da Dụng",
    "Thể Thao & Du Lịch",
    "Ô Tô & Xe Máy & Xe Đạp",
  ],
  [
    "Thời Trang Nữ",
    "Mẹ & Bé",
    "Nhà Cửa & Đời Sống",
    "Sắc Đẹp",
    "Sức Khỏe",
    "Giày Dép Nữ",
    "Túi Ví Nữ",
    "Phụ Kiện & Trang Sức Nữ",
    "Bách Hóa Online",
    "Nhà Sách Online",
  ],
];

const AppCategories = () => {
  return (
    <div className="categories-container">
      <Flex className="title" align="center">
        <Typography.Text>CATEGORIES</Typography.Text>
      </Flex>
      <div className="categories-list">
        {[0, 1].map((row_item) => {
          return (
            <Row key={row_item} style={{ width: "100%", height: "50%" }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((col_item) => {
                return (
                  <Col key={col_item} className="category-item">
                    <div className="category-image">
                      <div className="image-background">
                        <img
                          src={
                            new URL(
                              `../../images/categories/${row_item}${col_item}.png`,
                              import.meta.url
                            ).href
                          }
                        />
                      </div>
                    </div>
                    <Flex className="category-name" justify="center">
                      <Typography.Text>
                        {category_name[row_item][col_item]}
                      </Typography.Text>
                    </Flex>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
      <div
        className="box"
        style={{ height: "100px", backgroundColor: "white", margin: "20px" }}
      ></div>
    </div>
  );
};

export default AppCategories;
