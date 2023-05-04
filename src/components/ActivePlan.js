import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ActivePlan = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          alignItems: "center",
        }}
      >
        <h5>ActivePlans</h5>
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          View All <ArrowForwardIcon />
        </a>
      </div>
      <div className="ActivePlans_Bar_main">
        <label>Standerd</label>
        <div
          className="ActivePlans_Bar"
          style={{ height: "10px", width: "60%", backgroundColor: "#ffbc11" }}
        ></div>
      </div>
      <div className="ActivePlans_Bar_main">
        <label>Economy</label>
        <div
          className="ActivePlans_Bar"
          style={{ height: "10px", width: "80%", backgroundColor: "#4578f9" }}
        ></div>
      </div>
      <div className="ActivePlans_Bar_main">
        <label>Standerd</label>
        <div
          className="ActivePlans_Bar"
          style={{ height: "10px", width: "40%", backgroundColor: "#43b430" }}
        ></div>
      </div>
      <div className="ActivePlans_Bar_main">
        <label>Other</label>
        <div
          className="ActivePlans_Bar"
          style={{ height: "10px", width: "30%", backgroundColor: "#cb3eff" }}
        ></div>
      </div>
    </div>
  );
};

export default ActivePlan;
