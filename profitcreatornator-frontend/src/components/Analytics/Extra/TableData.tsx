import { TableBody, TableCell, TableRow } from "@tremor/react"
import GetBadge from "./GetBadge"

export default function TableData({ data }: any) {
  // if (data.trader_id === "1") {
    return (
      <TableRow>
        <TableCell> {data.code} </TableCell>
        <TableCell> {data.name} </TableCell>
        <TableCell> ${data.avgPrice} </TableCell>
        <TableCell>
          <GetBadge status={data.profitLoss[0]} amount={data.profitLoss} />
        </TableCell>
        <TableCell> {data.units} </TableCell>
        <TableCell> ${data.price} </TableCell>
        <TableCell> ${data.value} </TableCell>
        <TableCell>
          <GetBadge status={data.type} amount={data.type} />
        </TableCell>
      </TableRow>
    )
  // } else {
  //   return (
  //     <> This shouldn't happen </>
  //   )
  // }
 
}