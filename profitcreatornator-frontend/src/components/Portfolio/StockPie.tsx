// Imports

// Tremor SO
import { Badge, BadgeDelta, Card, DonutChart, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";

// END OF IMPORTS

export default function StockPie() {

    const stockData = [
        { symbol: "BHP", name: "BHP Group Limited", industry: "Materials", price: 46.040, shares: 200 },
        { symbol: "CBA", name: "Commonwealth Bank of Australia", industry: "Banks", price: 98.470, shares: 100 },
        { symbol: "VAS", name: "Vanguard Australian Shares Index EFT", industry: "Asset Management", price: 90.880, shares: 100 },
        { symbol: "NAB", name: "National Australia Bank Ltd.", industry: "Banks", price: 28.100, shares: 100 },
        { symbol: "CSL", name: "CSL Limited", industry: "Pharmaceuticals, Biotechnology & Life Sciences", price: 302.750, shares: 200 },
        { symbol: "WES", name: "Wesfarmers Limited", industry: "	Consumer Discretionary Distribution & Retail", price: 51.765, shares: 100 },
        { symbol: "TLS", name: "Telstra Group Limited", industry: "Telecommunications Services", price: 4.265, shares: 500 },
    ]

    const valueFormatter = (number: number) =>
        `${Intl.NumberFormat("us").format(number).toString()}`;


    return (
        <div className="stock-pie">
            <Card className="max-w-lg">
                <Metric> Stock - ratio </Metric>
                <DonutChart
                    className="mt-4"
                    variant="pie"
                    data={stockData}
                    category="shares"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "green"]}
                />
            </Card>
        </div>
    )
}