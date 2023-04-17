// React
import { SetStateAction, useState, useEffect } from "react";

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

// Material UI
import { TablePagination } from "@mui/material";

// Components
import TableData from "./Extra/TableData";

// Dummy Data
import data from "./Extra/TempData.json";

export default function AnalyticsOptionTable({ state }: any) {
  // Fetch options in db
  const [options, setOptions] = useState([]);

  // URL
  const API_URL = "http://localhost:8080/api/option";

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

  // Fetch request
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => { setOptions(data) });
  }, [])

  // Filter by status
  const filteredOptions = options.filter(option => option.status.includes(state));

  return (
    <Card style={{ marginTop: '2%', marginLeft: '2%', marginRight: '2%', width: '96%' }}>
      <Table className="mt-5">
        <TableHead style={{ fontSize: "100%" }}>
          <TableRow>
            {/* <TableHeaderCell> Code </TableHeaderCell>
            <TableHeaderCell> Name </TableHeaderCell>
            <TableHeaderCell> Avg Price </TableHeaderCell>
            <TableHeaderCell> Profit/Loss(%) </TableHeaderCell>
            <TableHeaderCell> Units </TableHeaderCell>
            <TableHeaderCell> Price </TableHeaderCell>
            <TableHeaderCell> Value </TableHeaderCell>
            <TableHeaderCell> Type </TableHeaderCell> */}
            <TableHeaderCell> Code </TableHeaderCell>
            <TableHeaderCell> Name </TableHeaderCell>
            <TableHeaderCell> Strike Price </TableHeaderCell>
            <TableHeaderCell> Profit/Loss(%) </TableHeaderCell>
            <TableHeaderCell> Units </TableHeaderCell>
            <TableHeaderCell> Premium</TableHeaderCell>
            <TableHeaderCell> Value </TableHeaderCell>
            <TableHeaderCell> Style </TableHeaderCell>
            <TableHeaderCell> Type </TableHeaderCell>
            <TableHeaderCell> Expiration </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOptions
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((option, key) => (
              <TableData key={key} data={option} /> 
            ))
          }
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