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

// Material UI
import { TablePagination } from "@mui/material";

// Components
import TableData from "./Extra/TableData";

// Dummy Data
import data from "./Extra/TempData.json";

export default function AnalyticsOptionTable({ state }: any) {
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

  // Filter by status
  const filteredData = data.filter(item => item.status === state);

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
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, key) => (
              // (item.status === state
              //   && <TableData key={key} data={item} />
              // )
              <TableData key={key} data={item} /> 
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