const UnderTextDiscountTag = (props) => {
  return (
    <div
      className="under-text-discount-tag-container"
      style={{
        color: "white",
        display: "inline-flex",
        alignItems: "center", // vertically centers any children
        boxSizing: "border-box",
        backgroundColor: "rgba(255,166,0,1)",
        height: "18px",
        padding: "0 6px",
        fontSize: "10px",
        lineHeight: "10px",
        // borderRadius: "2px",
        position: "relative",
        whiteSpace: "pre",
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          className="white-box"
          style={{
            backgroundColor: "white",
            width: `2px`,
            height: `2px`,
            position: "absolute",
            top: `calc((${item} * 2 - 1) * 2px)`,
            left: "0",
            borderRadius: "0 50% 50% 0",
          }}
        ></div>
      ))}
      {[1, 2, 3, 4].map((item) => (
        <div
          className="white-box"
          style={{
            backgroundColor: "white",
            width: `2px`,
            height: `2px`,
            position: "absolute",
            top: `calc((${item} * 2 - 1) * 2px)`,
            right: "0",
            borderRadius: "50% 0 0 50%",
          }}
        ></div>
      ))}
      {`Giảm `}
      <sup>đ</sup>
      {`${props.amount}k`}
    </div>
  );
};

export default UnderTextDiscountTag;
