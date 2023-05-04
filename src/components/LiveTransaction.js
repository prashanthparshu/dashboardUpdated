import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import { Grid } from "@mui/material";

const LiveTransaction = () => {
  return (
    <Grid container sx={{ boxShadow: "1px 1px #888888", marginTop: "10px" }}>
      <Grid item xs={4} sx={{ padding: "5px 50px" }}>
        <div>
          <h4>
            <span className="Month_tran_span_green">24%</span>than last month
          </h4>
          <div style={{ display: "flex" }}>
            <div>
              <GroupIcon />
            </div>
            <div>
              <h2>12.58K</h2>
              <span>Totle Users</span>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} sx={{ padding: "5px 50px" }}>
        <div>
          <h4>
            <span className="Month_tran_span_red">13%</span>than last month
          </h4>
          <div style={{ display: "flex" }}>
            <div>
              <GroupIcon />
            </div>
            <div>
              <h2>8.32K</h2>
              <span>Totall Transation</span>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} sx={{ padding: "5px 50px" }}>
        <div>
          <h4>
            <span className="Month_tran_span_green">17%</span>than last month
          </h4>
          <div style={{ display: "flex" }}>
            <div>
              <GroupIcon />
            </div>
            <div>
              <h2>83.02K</h2>
              <span>Total Post</span>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default LiveTransaction;
