import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Products.css";
import Cards from "../Cards/Cards";

function createData(name, productId, date, rating) {
  return { name, productId, date, rating };
}

const rows = [
  createData("Lasania Chicken Fry", 18908424, "6 Sep 2022", "⭐⭐⭐⭐⭐"),
  createData("Ice Cream Sandwich", 18908425, "11 April 2021", "⭐⭐⭐⭐"),
  createData("Gingerbread", 18908426, "18 Jan 2023", "⭐⭐⭐"),
  createData("Cupcake", 18908421, "24 Aug 2022", "⭐⭐⭐⭐⭐"),
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

export default function Products() {
  return (
    <>
      <div className="customers">
        <h1>Products</h1>

        <Cards />

        <div className="table">
          <h3>Our Best Selling Products</h3>

          <TableContainer
            component={Paper}
            style={{ boxShadow: "0 13px 20px 0 #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="left">Product ID</TableCell>
                  <TableCell align="left">Added Since</TableCell>
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
                    <TableCell align="left">{row.productId}</TableCell>
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
