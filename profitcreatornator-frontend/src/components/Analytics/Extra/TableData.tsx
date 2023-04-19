// React
import { TableCell, TableRow } from "@tremor/react"
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

// Components
import GetBadge from "./GetBadge"

// Style
import styles from "./Extra/TableBody.module.scss"

export default function TableData({ data, highlightedRow, setHighlightedRow, setDisplayHidden, setStockId, setOptionId }: any) {
  // Convert date to DD-MM-YYYY LT
  dayjs.extend(customParseFormat);
  const formattedDate = dayjs(data.expiration_date).format("MMMM D, YYYY hh:mm:ss")
  
  // Handle viewing detailed option
  const handleView = (event: React.MouseEvent<HTMLTableRowElement>) => {
    // Render component
    setDisplayHidden(true);

    // Set ids
    const tableRow: HTMLTableRowElement = event.currentTarget;
    const ids = tableRow.id.split(" ");
    setStockId(ids[0]);
    setOptionId(ids[1]);

    // Show highlighted row
    setHighlightedRow(data.id);
  }

  const selectedRow = "bg-purple-200"
  const unselectedRow = "hover:bg-purple-50"
  
  // if (data.trader_id === "1") {
    return (
      <TableRow 
        className={highlightedRow === data.id ? selectedRow : unselectedRow}
        onClick={handleView} 
        id={(data.stock.id + " " + data.id)}>
          <TableCell> {data.id} </TableCell>
          <TableCell> 
            {data.stock.name} 
          </TableCell>
          <TableCell> ${data.strike_price} </TableCell>
          <TableCell>
            {/* <GetBadge status={data.profitLoss[0]} amount={data.profitLoss} /> */}
          </TableCell>
          <TableCell> {data.quantity} </TableCell>
          <TableCell> ${data.premium} </TableCell>
          <TableCell> {data.style} </TableCell>
          <TableCell>
            <GetBadge status={data.type} amount={data.type.toUpperCase()} />
          </TableCell>
          <TableCell> {formattedDate.toString()} </TableCell>
      </TableRow>
    )
  // } else {
  //   return (
  //     <> This shouldn't happen </>
  //   )
  // }
}