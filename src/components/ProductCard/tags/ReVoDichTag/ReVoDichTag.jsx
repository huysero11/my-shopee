import { Button } from "antd";

const ReVoDichTag = () => {
  return (
    <div
      className="re-vo-dich-tag-container"
      style={{
        display: "inline-flex",
      }}
    >
      <Button
        color="danger"
        variant="outlined"
        style={{
          height: "19px",
          padding: "0 6px",
          borderRadius: "5px",
          fontSize: "10px",
        }}
      >
        Rẻ Vô Địch
      </Button>
    </div>
  );
};

export default ReVoDichTag;
