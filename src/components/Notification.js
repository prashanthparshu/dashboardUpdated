import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Notification = () => {
  return (
    <div className="Notification_main">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          alignItems: "center",
        }}
      >
        <h4>Recent Notification</h4>
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          View All <ArrowForwardIcon />
        </a>
      </div>
      <hr />
      <div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
