const DiscountTag = (props) => {
  //   console.log("In DiscountTag.jsx, props: ", props.percentage);
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        boxSizing: "border-box",
        padding: "2px 4px",
        backgroundColor: "rgb(254, 238, 234)",
        color: "rgb(238, 77, 45)",
        cursor: "pointer",
        fontSize: "12px",
        lineHeight: "14px",
        fontWeight: "500",
      }}
    >
      -{props.percentage}%
    </div>
  );
};

export default DiscountTag;
