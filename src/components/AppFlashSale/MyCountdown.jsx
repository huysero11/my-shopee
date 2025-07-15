import { useState, useEffect } from "react";

const timeStyle = {
  backgroundColor: "black",
  padding: "0 2px",
  color: "white",
  borderRadius: "3px",
  fontWeight: "bold",
  marginLeft: "5px",
};

const MyCountdown = () => {
  const [time, setTime] = useState([3, 34, 55]);
  const format_number = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        let [hours, minutes, seconds] = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        } else {
          clearInterval(countdown);
        }

        return [hours, minutes, seconds];
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={timeStyle}>{format_number(time[0])}</span>
      <span style={timeStyle}>{format_number(time[1])}</span>
      <span style={timeStyle}>{format_number(time[2])}</span>
    </div>
  );
};

export default MyCountdown;
