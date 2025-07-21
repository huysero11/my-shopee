const favouriteStyle = {
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgba(244, 91, 49, 1)",
  display: "inline-block",
  fontSize: "12px",
  fontWeight: "500",
  padding: "0 4px",
  margin: "0 2px 2px 0",
  borderRadius: "2px",
};

const mallStyle = {
  ...favouriteStyle,
  backgroundColor: "rgba(238, 0, 0, 1)",
};

const TextTag = (props) => {
  const text = props.text;

  return <div style={text == "Mall" ? mallStyle : favouriteStyle}>{text}</div>;
};

export default TextTag;
