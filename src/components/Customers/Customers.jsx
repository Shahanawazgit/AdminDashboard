import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Customers.css";
import Cards from "../Cards/Cards";

function createData(name, email, date, rating) {
  return { name, email, date, rating };
}

const rows = [
  createData(
    "Tony Starsk",
    "tony.starsk@gmail.com",
    "6 Sep 2022",
    "⭐⭐⭐⭐⭐"
  ),
  createData(
    "Steve Roggers",
    "steve.roggers@gmail.com",
    "11 April 2021",
    "⭐⭐⭐"
  ),
  createData(
    "Scarlett Johansson",
    "scarlett.johansson@gmail.com",
    "18 Jan 2023",
    "⭐⭐⭐⭐"
  ),
  createData(
    "Marine Parade",
    "marine.parade@gmail.com",
    "24 Aug 2022",
    "⭐⭐⭐⭐⭐"
  ),
];

const makeStyles = (stars) => {
  if (stars === "⭐⭐⭐⭐⭐") {
    return {
      background: "rgb(145, 254, 159)",
    };
  } else if (stars === "⭐⭐⭐⭐") {
    return {
      background: "#d6fc17",
    };
  } else {
    return {
      background: "#ffadad8f",
    };
  }
};

export default function Customers() {
  return (
    <>
      <div className="customers">
        <h1>Customers</h1>

        <Cards />

        <div className="table">
          <h3>Our Valuable Customers</h3>

          <TableContainer
            component={Paper}
            style={{ boxShadow: "0 13px 20px 0 #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">E-mail</TableCell>
                  <TableCell align="left">Customer Since</TableCell>
                  <TableCell align="left">Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                      <span className="stars" style={makeStyles(row.rating)}>
                        {row.rating}
                      </span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      Details
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
