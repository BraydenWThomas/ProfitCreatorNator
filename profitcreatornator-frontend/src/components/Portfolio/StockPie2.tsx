// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// Tremor SO
import { Card, DonutChart, Metric } from "@tremor/react";

// END OF IMPORTS

interface stockInformation {
    id: number;
    name: string;
    symbol: string;
    currentPrice: number;
}

interface portfolioItem {
    id: number;
    quantity: number;
    stock: stockInformation;
 }

export default function StockPie() {

    const [stocks, setStocks] = useState<portfolioItem[]>([]) // owned stocks

    // Make this more effecient, use that data component
    useEffect(() => {
            axios.get('http://localhost:8080/api/portfolio/trader/detailed/3') // use 3 for now
        .then(response => {
            console.log(response);
            setStocks(response.data)
        }).catch(error => console.log('error', error));
    }, [])

    const valueFormatter = (number: number) =>
        `${Intl.NumberFormat("us").format(number).toString()}`;


    return (
        <div className="stock-pie">
            <Card className="max-w-lg">
                <Metric> Stock - ratio </Metric>
                <DonutChart
                    className="mt-4"
                    variant="pie"
                    data={stocks}
                    category="quantity"
                    index="stock.symbol"
                    valueFormatter={valueFormatter}
                    colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "green"]}
                />
            </Card>
        </div>
    )
}