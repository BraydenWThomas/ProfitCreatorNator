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
import { Center } from "@chakra-ui/react";


export default function OptionTable({ tablerows }: { tablerows: OptionInfo[] }) {
    const data = tablerows;
    const profitLoss = "+15";
    return (
        <Card>

            <Table className="mt-5">
                <TableHead style={{ fontSize: "100%" }}>
                    <TableRow>
                        <TableHeaderCell>Stock</TableHeaderCell>
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
                            <TableCell><Button variant="secondary" size="sm"> {item.stock.name}</Button></TableCell>
                            <TableCell>
                                <Text>{item.expiration_date}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>${item.strike_price}</Text>
                            </TableCell>
                            <TableCell>

                                {profitLoss[0] == "+" ?
                                    <BadgeDelta
                                        deltaType="increase"
                                        isIncreasePositive={true}
                                        size="xs">
                                        {profitLoss}
                                    </BadgeDelta> :

                                    <BadgeDelta
                                        deltaType="decrease"
                                        isIncreasePositive={false}
                                        size="xs">
                                        {profitLoss}
                                    </BadgeDelta>}
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
                                    color={item.type == "put" ? "purple" : "orange"}
                                    size="xs">
                                    {item.type}
                                </Badge>

                            </TableCell>
                            <TableCell>
                            <Link href={'/viewOption/[id]'} as={`/viewOption/${item.id}`}> <Button color="green">View</Button></Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
};