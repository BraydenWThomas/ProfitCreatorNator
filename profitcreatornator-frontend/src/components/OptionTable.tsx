import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
    BadgeDelta
} from "@tremor/react";
export interface OptionInfo {
    code: String,
    name: String,
    strikePrice: number,
    profitLoss: String,
    units: number,
    price: number,
    value: number,
    type: String
  }


export default function OptionTable({tablerows}: {tablerows : OptionInfo[]}) {
    const data = tablerows;
    return (
        <Card style={{ marginLeft: '1%', marginRight: '1%', width: '98%' }}>

            <Table className="mt-5">
                <TableHead style={{ fontSize: "100%" }}>
                    <TableRow>
                        <TableHeaderCell>Code</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Strike Price($)</TableHeaderCell>
                        <TableHeaderCell>Profit/Loss(%)</TableHeaderCell>
                        <TableHeaderCell>Units</TableHeaderCell>
                        <TableHeaderCell>Price($)</TableHeaderCell>
                        <TableHeaderCell>Value($)</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.code}</TableCell>
                            <TableCell>
                                <Text>{item.name}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>${item.strikePrice}</Text>
                            </TableCell>
                            <TableCell>
                                {item.profitLoss[0] == "+" ?
                                    <BadgeDelta
                                        deltaType="increase"
                                        isIncreasePositive={true}
                                        size="xs">
                                        {item.profitLoss}
                                    </BadgeDelta> :

                                    <BadgeDelta
                                        deltaType="decrease"
                                        isIncreasePositive={false}
                                        size="xs">
                                        {item.profitLoss}
                                    </BadgeDelta>}
                            </TableCell>
                            <TableCell>
                                {item.units.toString()}
                            </TableCell>
                            <TableCell>
                                ${item.price}
                            </TableCell>
                            <TableCell>
                                ${item.value}
                            </TableCell>
                            <TableCell>

                                <Badge
                                    color={item.type == "PUT" ? "purple" : "orange"}
                                    size="xs">
                                    {item.type}
                                </Badge>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
};