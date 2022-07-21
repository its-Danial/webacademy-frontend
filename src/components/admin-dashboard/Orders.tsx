import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id: number, date: string, name: string, paymentMethod: string, amount: number) {
  return { id, date, name, paymentMethod, amount };
}

const rows = [
  createData(0, "21 Jul, 2022", "Malik Danial", "VISA ⠀•••• 3719", 50.0),
  createData(1, "18 Jul, 2022", "Paul McCartney", "VISA ⠀•••• 2574", 99.0),
  createData(2, "17 Jul, 2022", "Tom Scholz", "MC ⠀•••• 1253", 50.0),
  createData(3, "17 Jul, 2022", "Michael Jackson", "AMEX ⠀•••• 2000", 100.0),
  createData(4, "16 Jul, 2022", "Bruce Springsteen", "VISA ⠀•••• 5919", 30.0),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
