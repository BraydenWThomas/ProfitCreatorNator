import { StatusOnlineIcon } from "@heroicons/react/outline";
import Link from "next/link";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Badge,
    BadgeDelta,
    Button
} from "@tremor/react";
import { OptionInfo } from "@/pages/optionMarket";


export default function OptionTable({ tablerows }: { tablerows: OptionInfo[] }) {
    const data = tablerows;
    return (
        <Card style={{ marginLeft: '1%', marginRight: '1%', width: '98%' }}>

            <Table className="mt-5">
                <TableHead style={{ fontSize: "100%" }}>
                    <TableRow>
                        <TableHeaderCell>Code</TableHeaderCell>
                        <TableHeaderCell>Expiration Date</TableHeaderCell>
                        <TableHeaderCell>Strike Price($)</TableHeaderCell>
                        <TableHeaderCell>Profit/Loss(%)</TableHeaderCell>
                        <TableHeaderCell>Units</TableHeaderCell>
                        <TableHeaderCell>Premium($)</TableHeaderCell>
                        <TableHeaderCell>Style</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <Text>{item.expiration_date}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>${item.strike_price}</Text>
                            </TableCell>
                            <TableCell>

                                {/* {item.profitLoss[0] == "+" ?
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
                                    </BadgeDelta>} */}
                            </TableCell>
                            <TableCell>
                                {item.quantity.toString()}
                            </TableCell>
                            <TableCell>
                                ${item.premium}
                            </TableCell>
                            <TableCell>
                                {item.style}
                            </TableCell>
                            <TableCell>

                                <Badge
                                    color={item.type == "PUT" ? "purple" : "orange"}
                                    size="xs">
                                    {item.type}
                                </Badge>

                            </TableCell>
                            <TableCell>
                                <Button color="green"><Link href={{
                                    pathname: '/viewOption/' + item.id,
                              
                                }}>View</Link></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
};