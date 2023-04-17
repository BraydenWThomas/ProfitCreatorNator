// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// Tremor SO
import { Badge, BadgeDelta, Card, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";

// END OF IMPORTS

export default function StockPortfolio() {

    // you need to make an interface and an interface within that interface
    const [stocks, setStocks] = useState([0, "", "", 0])
    const [portfolio, setPortfolio] = useState([])

    // Get stocks for 'My Holdings'
    useEffect(() => {
        Promise.all([
            axios.get('http://localhost:8080/api/portfolio/trader/detailed/3'), // use 3 for now
            axios.get('http://localhost:8080/api/portfolio/trader/3') // use 3 for now
        ]).then(response => {
            console.log(response);
            setStocks(response[0].data)
            setPortfolio(response[1].data)
        }).catch(error => console.log('error', error));
    }, [])

    console.log(stocks)

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
                            stocks.map((stock, index) =>
                                <TableRow key={index}>
                                    <TableHeaderCell> <Text> {stock.id} </Text> </TableHeaderCell>
                                    <TableHeaderCell> <Text> {stock.stock.name} </Text> </TableHeaderCell>
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