import { TableBody, TableCell, TableRow } from "@tremor/react"
import GetBadge from "./GetBadge"

// interface TempData {
//   code: string,
//   name: string,
//   avgPrice: string,
//   profitLoss: string,
//   units: string,
//   price: string,
//   value: string,
//   type: string
// }

export default function TableData(props: any) {
  console.log(props.code);
  return (
    <>
      <TableRow>
        <TableCell> {props.code} </TableCell>
        <TableCell> {props.name} </TableCell>
        <TableCell> ${props.avgPrice} </TableCell>
        <TableCell>
          {/* <GetBadge status={props.profitLoss[0]} amount={props.profitLoss} /> */}
        </TableCell>
        <TableCell> {props.units} </TableCell>
        <TableCell> ${props.price} </TableCell>
        <TableCell> ${props.value} </TableCell>
        <TableCell>
          {/* <GetBadge status={props.type} amount={props.type} /> */}
        </TableCell>
      </TableRow>
    </>
  )
}