// React
import { SetStateAction, useState } from "react";

import { StatusOnlineIcon } from "@heroicons/react/outline";

// Tremor
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";

// Components
import TableData from "./Extra/TableData";
import { TablePagination } from "@mui/material";
import GetBadge from "./Extra/GetBadge";

export default function AnalyticsOptionTable() {
  const data = [
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "PUT"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    },
    {
      code: "IT0001",
      name: "Microsoft",
      avgPrice: "133.55",
      profitLoss: "+15%",
      units: "500",
      price: "132.07",
      value: "4424324",
      type: "CALL"
    }
  ];

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  
  return (
    <Card style={{ marginTop: '2%', marginLeft: '2%', marginRight: '2%', width: '96%' }}>
      <Table className="mt-5">
        <TableHead style={{ fontSize: "100%" }}>
          <TableRow>
            <TableHeaderCell> Code </TableHeaderCell>
            <TableHeaderCell> Name </TableHeaderCell>
            <TableHeaderCell> Avg Price </TableHeaderCell>
            <TableHeaderCell> Profit/Loss(%) </TableHeaderCell>
            <TableHeaderCell> Units </TableHeaderCell>
            <TableHeaderCell> Price </TableHeaderCell>
            <TableHeaderCell> Value </TableHeaderCell>
            <TableHeaderCell> Type </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, key) => (
              <TableRow key={key}>
                <TableCell> {item.code} </TableCell>
                <TableCell> {item.name} </TableCell>
                <TableCell> ${item.avgPrice} </TableCell>
                <TableCell>
                  <GetBadge status={item.profitLoss[0]} amount={item.profitLoss} />
                </TableCell>
                <TableCell> {item.units} </TableCell>
                <TableCell> ${item.price} </TableCell>
                <TableCell> ${item.value} </TableCell>
                <TableCell>
                  <GetBadge status={item.type} amount={item.type} />
                </TableCell>
              </TableRow>
            ))
          }
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  )
};