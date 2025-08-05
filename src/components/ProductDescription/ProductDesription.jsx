import { Typography, Breadcrumb } from "antd";
import "./ProductDescription.css";

const ProductDesription = (props) => {
  const product = props.product;

  const breadcrumb = (
    <Breadcrumb
      className="product-description-breadcrumb"
      separator=">"
      items={[
        {
          title: "Shopee",
        },
        {
          title: product.detail.category,
        },
        {
          title: product.name,
        },
      ]}
    />
  );

  const chi_tiet_san_pham_left_text = [
    "Danh mục",
    "Kho",
    "Giới tính",
    "Loại hình",
    "Đồ nén",
    "Gửi từ",
  ];

  const chi_tiet_san_pham_right_text = [
    breadcrumb,
    product.detail.availabilityStatus,
    "Unisex",
    "Ngoài trời & trong nhà",
    "Không",
    "Nước ngoài",
  ];

  const mo_ta_san_pham_left_text = [
    "Brand",
    "Category",
    "Description",
    "Width",
    "Height",
    "Depth",
    "Weight",
    "Return policy",
    "Warranty information",
  ];
  const mo_ta_san_pham_right_text = [
    product.detail.brand,
    product.detail.category,
    product.detail.description,
    product.detail.dimensions.width,
    product.detail.dimensions.height,
    product.detail.dimensions.depth,
    product.detail.weight,
    product.detail.returnPolicy,
    product.detail.warrantyInformation,
  ];

  const gap_div = <div className="gap-div"></div>;

  const description_text = [
    "Chào mừng đến với cửa hàng của tôi ",
    "Thông số kỹ thuật mặt hàng:",
    "1. Áo đấu chất lượng hàng đầu",
    "2. Kích thước: S / M / L / XL / XXL",
    "Kích thước (Tiêu chuẩn Châu Âu)",
    gap_div,
    "Lưu ý Mẹo:",
    "1.Vui lòng cung cấp địa chỉ chính xác sau khi thanh toán của bạn",
    "2. khi bạn thanh toán thành công, đơn đặt hàng thường sẽ được gửi trong vòng 1-3 ngày sau khi thanh toán. cảm ơn.",
    "3. ảnh chỉ để tham khảo, xin vui lòng ưu tiên hiện vật",
    "4. về hình ảnh, vì màn hình máy tính có quang sai màu, đặc biệt là giữa màn hình CRT và màn hình LCD, màu sắc sẽ khác một chút.",
    gap_div,
    "Sau khi bán hàng & phản hồi:",
    "1. chúng tôi hy vọng sản phẩm của chúng tôi luôn có thể làm cho bạn hài lòng, nếu có điều gì đó sai hoặc bị lỗi.",
    "Vui lòng liên hệ với chúng tôi và chúng tôi sẽ giúp bạn giải quyết tất cả các vấn đề.",
    gap_div,
    "2. chúng tôi muốn phát triển với khách hàng của chúng tôi, xin vui lòng để lại cho chúng tôi một phản hồi tích cực, nếu bạn hài lòng với sản phẩm của chúng tôi và dịch vụ của chúng tôi, xin vui lòng cho chúng tôi đánh giá năm sao, cảm ơn bạn.",
    gap_div,
    "3. chúng tôi quan tâm đến khách hàng thân thiết của chúng tôi, và sẽ luôn cố gắng giúp bạn, hy vọng thiết lập kinh doanh lâu dài với bạn.",
  ];

  return (
    <>
      <div className="product-dexcription-container">
        <div className="product-description-chi-tiet-san-pham">
          <div className="product-description-chi-tiet-san-pham-title">
            CHI TIẾT SẢN PHẨM
          </div>
          <div className="product-description-chi-tiet-san-pham-content">
            {[0, 1, 2, 3, 4, 5].map((key_row) => (
              <div
                key={key_row}
                className="product-description-chi-tiet-san-pham-row"
              >
                <div className="product-description-chi-tiet-san-pham-row-left">
                  {chi_tiet_san_pham_left_text[key_row]}
                </div>
                <div className="product-description-chi-tiet-san-pham-row-right">
                  {chi_tiet_san_pham_right_text[key_row]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product-description-mo-ta-san-pham">
          <div className="product-description-mo-ta-san-pham-title">
            MÔ TẢ SẢN PHẨM
          </div>
          <div className="product-description-mo-ta-san-pham-content">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div>{description_text[item]}</div>
            ))}

            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((key_row) => (
              <div
                key={key_row}
                className="product-description-mo-ta-san-pham-row"
              >
                <div className="product-description-mo-ta-san-pham-row-left">
                  {mo_ta_san_pham_left_text[key_row]}
                </div>
                <div className="product-description-mo-ta-san-pham-row-right">
                  {mo_ta_san_pham_right_text[key_row]}
                </div>
              </div>
            ))}

            {Array.from({ length: 14 }).map((_, index) => (
              <div>{description_text[index + 5]}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDesription;
