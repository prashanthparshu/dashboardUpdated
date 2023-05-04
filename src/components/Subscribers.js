import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Subscriber from "../jsonData/Subscriber.json";

const Subscribers = () => {
  return (
    <div className="Subscribers_main">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            alignItems: "center",
          }}
        >
          <h2>Recent Subscribers</h2>
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            View All <ArrowForwardIcon />
          </a>
        </div>
        <TableContainer component={"Paper"}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">UserId</TableCell>
                <TableCell align="right">Community</TableCell>
                <TableCell align="right">Plan Name</TableCell>
                <TableCell align="right">Plan Status</TableCell>
                <TableCell align="right">Joined On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Subscriber.map((row) => (
                <TableRow
                  key={row.UserId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row.UserId}</TableCell>
                  <TableCell align="right">{row.Comunity}</TableCell>
                  <TableCell align="right">{row.PlanName}</TableCell>
                  <TableCell align="right">{row.PlanStatus}</TableCell>
                  <TableCell align="right">{row.JoinedOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Subscribers;
