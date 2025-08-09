import { FaCircleCheck } from "react-icons/fa6";

import "./PoppedUpNoti.css";

const PoppedUpNoti = ({ message }) => {
  return (
    <div className="popped-up-noti-container">
      <div className="popped-up-noti-icon-wrapper">
        <FaCircleCheck className="popped-up-noti-icon" />
      </div>
      <div className="popped-up-noti-message">{message}</div>
    </div>
  );
};

export default PoppedUpNoti;
