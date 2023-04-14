// Imports

// Tremor SO
import { Badge, BadgeDelta, Card, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";

// END OF IMPORTS

export default function StockPortfolio() {

    const stockData = [
        { symbol: "BHP", name: "BHP Group Limited", industry: "Materials", price: 46.040, shares: 200 },
        { symbol: "CBA", name: "Commonwealth Bank of Australia", industry: "Banks", price: 98.470, shares: 100 },
        { symbol: "VAS", name: "Vanguard Australian Shares Index EFT", industry: "Asset Management", price: 90.880, shares: 100 },
        { symbol: "NAB", name: "National Australia Bank Ltd.", industry: "Banks", price: 28.100, shares: 100 },
        { symbol: "CSL", name: "CSL Limited", industry: "Pharmaceuticals, Biotechnology & Life Sciences", price: 302.750, shares: 200 },
        { symbol: "WES", name: "Wesfarmers Limited", industry: "	Consumer Discretionary Distribution & Retail", price: 51.765, shares: 100 },
        { symbol: "TLS", name: "Telstra Group Limited", industry: "Telecommunications Services", price: 4.265, shares: 500 },
    ]

    return (
        <div className="stock-portfolio">
            <Card>
                <Metric>Stocks</Metric>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Symbol</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Industry</TableHeaderCell>
                            <TableHeaderCell>Price ($)</TableHeaderCell>
                            <TableHeaderCell>Shares</TableHeaderCell>
                            <TableHeaderCell>Total Cost ($)</TableHeaderCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            stockData.map((stock, index) =>
                                <TableRow key={index}>
                                    <TableHeaderCell> <Text> {stock.symbol} </Text> </TableHeaderCell>
                                    <TableHeaderCell> <Text> {stock.name} </Text> </TableHeaderCell>
                                    <TableHeaderCell> <Text> {stock.industry} </Text> </TableHeaderCell>
                                    <TableHeaderCell> <Text> {stock.price} </Text> </TableHeaderCell>
                                    <TableHeaderCell> <Text> {stock.shares} </Text> </TableHeaderCell>
                                    <TableHeaderCell> <Text> {stock.price * stock.shares} </Text> </TableHeaderCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}