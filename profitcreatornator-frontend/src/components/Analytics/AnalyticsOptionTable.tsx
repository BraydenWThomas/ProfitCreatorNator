// React
import { useState, useEffect } from "react";

// Design Frameworks
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";

import { TablePagination } from "@mui/material";

// Style
import styles from "./Extra/TableBody.module.scss"

// Components
import TableData from "./Extra/TableData";
import DetailedOption from "./Extra/DetailedOption";

export default function AnalyticsOptionTable({ state, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, displayHidden, setDisplayHidden}: any) {
  // Fetch options in db
  const [options, setOptions] = useState<any[]>([]);

  // URL
  const API_URL = "http://localhost:8080/api/option";

  // Fetch request
  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      redirect: "follow",
    })
      .then(response => response.json())
      .then(data => { setOptions(data) });
  }, [])

  // Filter by status
  const filteredOptions = options.filter(option => option.status.includes(state));

  // Show detailed option
  const [stockId, setStockId] = useState("");
  const [optionId, setOptionId] = useState("");
  const [highlightedRow, setHighlightedRow] = useState("");

  return (
    <div>
      <Card style={{ marginTop: '-1%', marginLeft: '1%', marginRight: '1%', width: '98%' }}>
        <Table className="analytics-options">
          <TableHead className="bg-purple-50 uppercase   " style={{ fontSize: "100%" }}>
            <TableRow>
              <TableHeaderCell> Code </TableHeaderCell>
              <TableHeaderCell> Name </TableHeaderCell>
              <TableHeaderCell> Strike Price ($) </TableHeaderCell>
              {/* <TableHeaderCell> Profit/Loss(%) </TableHeaderCell> */}
              <TableHeaderCell> Units </TableHeaderCell>
              <TableHeaderCell> Premium ($) </TableHeaderCell>
              <TableHeaderCell> Style </TableHeaderCell>
              <TableHeaderCell> Type </TableHeaderCell>
              <TableHeaderCell> Expiration </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOptions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((option, key) => (
                <TableData
                  key={key}
                  data={option}
                  highlightedRow={highlightedRow}
                  setHighlightedRow={setHighlightedRow}
                  setDisplayHidden={setDisplayHidden}
                  setStockId={setStockId}
                  setOptionId={setOptionId} />
              ))
            }
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredOptions.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
      {displayHidden == false 
        ? <> </>
        : <div style={{ marginTop: '0.2%' }}>
            <DetailedOption stockId={stockId} optionId={optionId} />
          </div>
      }
    </div>
  )
};