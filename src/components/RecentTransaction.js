import React from "react";
import Data from "../jsonData/Data.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const RecentTransaction = () => {
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
        <h2>Recent Transation</h2>
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
              <TableCell>UserId</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Source</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row) => (
              <TableRow
                key={row.UserId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.UserId}
                </TableCell>
                <TableCell align="right">{row.Amount}</TableCell>
                <TableCell align="right">{row.Status}</TableCell>
                <TableCell align="right">{row.Source}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecentTransaction;
