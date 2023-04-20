// Imports

import React, { useEffect, useState } from "react";
import axios from "axios";

// Tremor SO
import { Card, Col, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, DonutChart, Grid, Title } from "@tremor/react";

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

interface UserProps {
    active: number
}

function StockPie({ active }: UserProps) {

    const [stocks, setStocks] = useState<portfolioItem[]>([]) // owned stocks

    // Make this more effecient, use that data component
    useEffect(() => {
        axios.get('http://localhost:8080/api/portfolio/trader/detailed/' + active) // use 3 for now
            .then(response => {
                //console.log(response);
                setStocks(response.data)
            }).catch(error => console.log('error', error));
    }, [])

    const valueFormatter = (number: number) =>
        `${Intl.NumberFormat("us").format(number).toString()}`;


    return (
        <div className="stock-pie">
                <DonutChart style={{ height:250, paddingBottom: 40}}
                    className="mt-4"
                    variant="donut"
                    data={stocks}
                    category="quantity"
                    index="stock.symbol"
                    valueFormatter={valueFormatter}
                    colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "green"]}
                />
        </div>
    )
}

export default function StockPortfolio({ active }: UserProps) {

    const [stocks, setStocks] = useState<portfolioItem[]>([]) // owned stocks

    // Make this more effecient, use that data component
    useEffect(() => {
        axios.get('http://localhost:8080/api/portfolio/trader/detailed/' + active) // use 3 for now
            .then(response => {
                console.log(response);
                setStocks(response.data)
            }).catch(error => console.log('error', error));
    }, [])

    return (
        <div className="stock-portfolio">
            <Card>
                <Metric>Stocks</Metric>
                <Grid numCols={4} className="gap-2">
                    <Col numColSpan={3}>
                        <div>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell>Symbol</TableHeaderCell>
                                        <TableHeaderCell>Name</TableHeaderCell>
                                        <TableHeaderCell>Price ($)</TableHeaderCell>
                                        <TableHeaderCell>Shares</TableHeaderCell>
                                        <TableHeaderCell>Total Cost ($)</TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        stocks.map((stock, index) =>
                                            <TableRow key={index}>
                                                <TableCell> <Text> {stock.stock.symbol} </Text> </TableCell>
                                                <TableCell> <Text> {stock.stock.name} </Text> </TableCell>
                                                <TableCell> <Text> {stock.stock.currentPrice} </Text> </TableCell>
                                                <TableCell> <Text> {stock.quantity} </Text> </TableCell>
                                                <TableCell> <Text> {stock.quantity * stock.stock.currentPrice} </Text> </TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </Col>
                    <Col numColSpan={1}>
                        <StockPie active={active} />
                    </Col>
                </Grid>
            </Card>
        </div>
    )
}