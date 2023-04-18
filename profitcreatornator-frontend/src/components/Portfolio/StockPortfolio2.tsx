// Imports
 import PortfolioData from '@/components/data/PortfolioData';

import React, { useEffect, useState } from "react";
import axios from "axios";

// Tremor SO
import { Card, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from "@tremor/react";

// END OF IMPORTS

<<<<<<< HEAD
=======

>>>>>>> master
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

<<<<<<< HEAD
=======

>>>>>>> master
export default function StockPortfolio({active}: UserProps) {

    const [stocks, setStocks] = useState<portfolioItem[]>([]) // owned stocks

    // Make this more effecient, use that data component
    useEffect(() => {
            axios.get('http://localhost:8080/api/portfolio/trader/detailed/' + active ) // use 3 for now
        .then(response => {
            console.log(response);
            setStocks(response.data)
        }).catch(error => console.log('error', error));
    }, [])

    return (
        <div className="stock-portfolio">
            <Card>
                <Metric>Stocks</Metric>
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
                                    <TableCell> <Text> { stock.stock.symbol } </Text> </TableCell>
                                    <TableCell> <Text> { stock.stock.name } </Text> </TableCell>
                                    <TableCell> <Text> { stock.stock.currentPrice } </Text> </TableCell>
                                    <TableCell> <Text> { stock.quantity } </Text> </TableCell>
                                    <TableCell> <Text> { stock.quantity * stock.stock.currentPrice } </Text> </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}