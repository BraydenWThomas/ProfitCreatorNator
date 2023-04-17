import { TableBody, TableCell, TableRow } from "@tremor/react"
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import GetBadge from "./GetBadge"

export default function TableData({ data }: any) {
  // Convert date to DD-MM-YYYY LT
  dayjs.extend(customParseFormat);
  const formattedDate = dayjs(data.expiration_date).format("MMMM D, YYYY hh:mm:ss")
 
  // if (data.trader_id === "1") {
    return (
      <TableRow>
        <TableCell> {data.id} </TableCell>
        <TableCell> {data.name} </TableCell>
        <TableCell> ${data.strike_price} </TableCell>
        <TableCell>
          {/* <GetBadge status={data.profitLoss[0]} amount={data.profitLoss} /> */}
        </TableCell>
        <TableCell> {data.quantity} </TableCell>
        <TableCell> ${data.premium} </TableCell>
        <TableCell> ${data.value} </TableCell>
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