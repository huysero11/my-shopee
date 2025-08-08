import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./MyPagination.css";

const MyPagination = (props) => {
  let pagination_items = [];
  for (let i = 1; i <= props.page_count; i++) {
    pagination_items.push(i);
  }

  return (
    <div className="my-pagination-container">
      <div className="my-pagination-arrow">
        <LeftOutlined
          className="my-pagination-arrow-icon"
          onClick={() => {
            props.setCurrentPage(Math.max(1, props.currentPage - 1));
          }}
        />
      </div>
      {pagination_items.map((item) => {
        return (
          <>
            <div
              key={item}
              className={`my-pagination-item ${item === props.currentPage ? `active` : ``}`}
              onClick={() => {
                props.setCurrentPage(item);
              }}
            >
              {item}
            </div>
          </>
        );
      })}
      <div className="my-pagination-arrow">
        <RightOutlined
          className="my-pagination-arrow-icon"
          onClick={() => {
            props.setCurrentPage(
              Math.min(props.page_count, props.currentPage + 1)
            );
          }}
        />
      </div>
    </div>
  );
};

export default MyPagination;
