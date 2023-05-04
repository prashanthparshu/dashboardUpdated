import { Grid } from "@mui/material";

import React from "react";
import LiveTransaction from "../components/LiveTransaction";
import Transaction from "../components/Transaction";
import Notification from "../components/Notification";
import Subscribers from "../components/Subscribers";
import Chart from "../components/Chart";

const MainSinglePage = () => {
  return (
    <>
      <Grid container>
        {/* Left Side  */}
        <Grid item xs={9}>
          <LiveTransaction />
          <Transaction />
        </Grid>
        {/* Right Side  */}
        <Grid item xs={3} sx={{ boxShadow: "2px 1px #888888" }}>
          <Notification />
        </Grid>
      </Grid>
      <Grid container>
        {/* Left Side  */}
        <Grid item xs={9} sx={{ boxShadow: "2px 1px #888888" }}>
          <Subscribers />
        </Grid>
        {/* Right Side  */}
        <Grid item xs={3} sx={{ boxShadow: "2px 1px #888888" }}>
          <Chart />
        </Grid>
      </Grid>
    </>
  );
};

export default MainSinglePage;
