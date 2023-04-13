import { Button, Card, Divider, Flex, Title, Text, LineChart, TabList, Tab, Toggle, ToggleItem, AreaChart } from "@tremor/react";

import { useState } from "react";
import { startOfYear, subDays } from "date-fns";

// 'Volume' may be redundant because you dont look at a total of ALL your stock shares
const data = [
    {
        Date: "04.05.2021",
        Price: 119.05,
        Volume: 21400410,
    },
    {
        Date: "05.05.2021",
        Price: 113,
        Volume: 29707270,
    },
    {
        Date: "17.06.2022",
        Price: 95.32,
        Volume: 34187420,
    },
    {
        Date: "25.09.2022",
        Price: 80.67,
        Volume: 35712541,
    },
    {
        Date: "30.10.2022",
        Price: 79.78,
        Volume: 44996423,
    },
    {
        Date: "12.11.2022",
        Price: 70.50,
        Volume: 45999903,
    },
    {
        Date: "31.12.2022",
        Price: 72.54,
        Volume: 52005323,
    },
    {
        Date: "30.11.2022",
        Price: 78.20,
        Volume: 531234532,
    },
    {
        Date: "12.12.2022",
        Price: 90.50,
        Volume: 48010055,
    },
];

// Gives the y exis value a '$'
const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

export default function LineChartTabs() {
    const [selectedPeriod, setSelectedPeriod] = useState("Max");
    const [selectedCategory, setSelectedCategory] = useState("Price");

    const getDate = (dateString: string) => {
        const [day, month, year] = dateString.split(".").map(Number);
        return new Date(year, month - 1, day);
    };

    const filterData = (startDate: Date, endDate: Date) =>
        data.filter((item) => {
            const currentDate = getDate(item.Date);
            return currentDate >= startDate && currentDate <= endDate;
        });

    const getFilteredData = (period: string) => {
        const lastAvailableDate = getDate(data[data.length - 1].Date);
        switch (period) {
            case "1M": {
                const periodStartDate = subDays(lastAvailableDate, 30);
                return filterData(periodStartDate, lastAvailableDate);
            }
            case "3M": {
                const periodStartDate = subDays(lastAvailableDate, 90);
                return filterData(periodStartDate, lastAvailableDate);
            }
            case "6M": {
                const periodStartDate = subDays(lastAvailableDate, 180);
                return filterData(periodStartDate, lastAvailableDate);
            }
            case "YTD": {
                const periodStartDate = startOfYear(lastAvailableDate);
                return filterData(periodStartDate, lastAvailableDate);
            }
            default:
                return data;
        }
    };

    // const displayCategory = () => {
    //     if (selectedCategory === "Volume") {
    //         return "Volume"
    //     } else {
    //         return dataFormatter
    //     }
    // }



    return (
        <Card
            className="h-full w-full mx-auto"
            decoration="top"
            decorationColor="purple"
        >
            <Title>Performance - {selectedCategory}</Title>

            <div style={{ float: "left" }}>
                <TabList
                    defaultValue={selectedPeriod}
                    onValueChange={(value) => setSelectedPeriod(value)}
                    className="mt-10" color="purple">
                    <Tab value="1M" text="1M" />
                    <Tab value="3M" text="3M" />
                    <Tab value="6M" text="6M" />
                    <Tab value="YTD" text="YTD" />
                    <Tab value="Max" text="Max" />
                </TabList>
            </div>

            <div style={{ float: "right" }}>
                <Toggle
                    className="float-right" // Trying to get this to float right but, cant X(
                    color="zinc"
                    defaultValue="Price"
                    onValueChange={(value) => setSelectedCategory(value)}
                >
                    <ToggleItem value="Price" text="Price" />
                    <ToggleItem value="Volume" text="Volume" />
                </Toggle>
            </div>

            <div style={{ clear: "both" }}>
                <AreaChart
                    className="h-80 mt-8"
                    data={getFilteredData(selectedPeriod)}
                    index="Date"
                    categories={[selectedCategory]}
                    colors={["purple"]}
                    valueFormatter={dataFormatter} // Not Sure how this works
                    showLegend={false}
                    yAxisWidth={48}
                />
            </div>
            {/* <Flex justifyContent="end" className="space-x-2">
            <Button size="sm" onClick={() => setSelectedCategory("Price")}> Price </Button>
            <Button size="sm" onClick={() => setSelectedCategory("Volume")}> Volume </Button>
            </Flex> */}
        </Card>
    );
}