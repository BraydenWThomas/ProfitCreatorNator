// IMPORTS

// Tremor SO
import { Grid } from "@mui/material";
import {
    Card,
    LineChart,
    Text, Title,
    Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, AreaChart, Metric,
}
    from "@tremor/react";

// END OF IMPORTS

export default function Value() {
    // var dummyValue = [2032, 1232, 1002, 6543, 7375, 1097, 2231, 45233, 435, 5453, 9861, 3342];
    // var dummyMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const chartdata = [
        {
            month: "Jan",
            "Value": 2032,
        },
        {
            month: "Feb",
            "Value": 1232,
        },
        {
            month: "Mar",
            "Value": 1002,
        },
        {
            month: "Apr",
            "Value": 6543,
        },
        {
            month: "May",
            "Value": 7375,
        },{
            month: "Jun",
            "Value": 1097,
        },{
            month: "Jul",
            "Value": 2231,
        },
        {
            month: "Aug",
            "Value": 15233,
        },
        {
            month: "Sep",
            "Value": 435,
        },
        {
            month: "Oct",
            "Value": 5453,
        },
        {
            month: "Nov",
            "Value": 9861,
        },{
            month: "Dec",
            "Value": 3342,
        },
    ];

    const dataFormatter = (number: number) =>
        `${Intl.NumberFormat("us").format(number).toString()}`;

    return (
        <Grid pl={2}>
        <Card decoration="top" decorationColor="purple">
            <Metric>Your Value</Metric>
            <AreaChart
                className="mt-6"
                data={chartdata}
                index="month"
                categories={["Value"]}  
                colors={["purple"]}
                yAxisWidth={40}
            />
        </Card>
        </Grid>
    )
}
