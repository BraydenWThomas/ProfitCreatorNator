// Material UI

// Chakra UI

// Tremor SO
import {
    Card,
    Text, Title,
    Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, BadgeDelta, Metric,
}
    from "@tremor/react";


export default function Gain() {
    const dummyList = [
        { name: "CompanyStock1", value: 1221, net: 432 },
        { name: "CompStock2", value: 76478, net: 80 },
        { name: "Stock3", value: 80041, net: 342 },
        { name: "CStock4", value: 1207, net: 674 },
        { name: "CS5", value: 57300, net: 53 },
    ]

    // Sorts from highest to lowest gains
    const topLossList = [...dummyList].sort((a, b) => b.net - a.net);


    return (
        <Card decoration="top" decorationColor="green">
            <Title>Top Gainers</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className="font-medium m-2"> <Text> Stock </Text> </TableHeaderCell>
                        <TableHeaderCell> <Text> Value </Text> </TableHeaderCell>
                        <TableHeaderCell> <Text> Gain </Text> </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        topLossList.map((dummyList, index) =>
                            <TableRow key={index}>
                                <TableCell> <Text> {dummyList.name} </Text> </TableCell>
                                <TableCell> <Text> {dummyList.value} </Text> </TableCell>
                                <TableCell> <BadgeDelta deltaType="moderateIncrease"> {dummyList.net} </BadgeDelta> </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </Card>
    )
}
