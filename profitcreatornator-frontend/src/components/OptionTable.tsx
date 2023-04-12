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

const data = [
    {
        code: "IT0001",
        name: "Microsoft",
        avgPrice: "133.55",
        profitLoss:
            "+15%",
        units: "500",
        price: "132.07",
        value: "4424324",
        type: "Technology"

    },
    {
        code: "IT0001",
        name: "Microsoft",
        avgPrice: "133.55",
        profitLoss:
            "+15%",
        units: "500",
        price: "132.07",
        value: "4424324",
        type: "Technology"

    }
];

export default function OptionTable() {
    return (
        <Card style={{ marginLeft: '2%', marginRight: '2%', width: '96%' }}>

            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Code</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Avg Price</TableHeaderCell>
                        <TableHeaderCell>Profit/Loss(%)</TableHeaderCell>
                        <TableHeaderCell>Units</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>Value</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.code}>
                            <TableCell>{item.code}</TableCell>
                            <TableCell>
                                <Text>{item.name}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>${item.avgPrice}</Text>
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
                                {item.units}
                            </TableCell>
                            <TableCell>
                                ${item.price}
                            </TableCell>
                            <TableCell>
                                ${item.value}
                            </TableCell>
                            <TableCell>
                                {item.type}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
};