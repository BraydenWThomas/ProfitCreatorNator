// Material UI

// Chakra UI

// Tremor SO
import {
    Card,
    Text, Title,
    Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, BadgeDelta, Metric,
}
    from "@tremor/react";


export default function Loss() {
    const dummyList = [
        { name: "CompanyStock1", value: 7635, net: -43 },
        { name: "CompStock2", value: 5434, net: -80 },
        { name: "Stock3", value: 99740, net: -12 },
        { name: "CStock4", value: 2114, net: -74 },
        { name: "CS5", value: 556012, net: -823 },
    ]

    // Sorts from highest to lowest loss
    const topLossList = [... dummyList].sort((a, b) => b.net - a.net);


    return (
        <Card decoration="top" decorationColor="red">
            <Title>Top Losses</Title>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableHeaderCell className="font-medium m-2"> <Text> Stock </Text> </TableHeaderCell>
                    <TableHeaderCell> <Text> Value </Text> </TableHeaderCell>
                    <TableHeaderCell> <Text> Loss </Text> </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topLossList.map((dummyList, index) =>
                        <TableRow key={index}>
                            <TableCell> <Text> {dummyList.name} </Text> </TableCell>
                            <TableCell> <Text> {dummyList.value} </Text> </TableCell>
                            <TableCell> <BadgeDelta deltaType="moderateDecrease"> {dummyList.net} </BadgeDelta> </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Card>
    )
}
