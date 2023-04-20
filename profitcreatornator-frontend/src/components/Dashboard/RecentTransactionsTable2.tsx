
// IMPORTS
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Material UI
// import Button from "@mui/material/Button"

// Tremor
import { Badge, BadgeDelta, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, TabList, Tab, Text, Title, Button } from "@tremor/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

// END OF IMPORTS

// Format data from the API call
interface OptionsProperties {
    barrierOptions: BarrierOptions;
    expiration_date: Date;
    id: number;
    premium: number;
    purchase_date?: Date;
    quantity: number;
    status: string;
    stock: Stock;
    strike_price: number;
    style: string;
    taker: Taker;
    type: string;
    writer: Writer;
}

interface BarrierOptions {
    id: number;
    status?: string;
    threshold: number;
    type?: string;
}

interface Stock {
    currentPrice: number;
    id: number;
    name: string;
    symbol: string;
}

interface Taker {
    id: number;
    name: string;
}

interface Writer {
    id: number;
    name: string;
}

interface UserProps {
    active: number
}

const dateFormatter = (date: any) => {
    return (
        dayjs(date).format('D MMMM YYYY')
    )
}

export default function RecentTransactions({ active }: UserProps) {
    const [options, setOptions] = useState<OptionsProperties[]>([]);

    // API Call to get option information based on user
    useEffect(() => {
        axios.get('http://localhost:8080/api/option/' + active + '/all')
            .then(response => {
                setOptions(response.data)
            }).catch(error => console.log('error', error));
    }, [])

    return (
        <div className="recent-transactions">
            <Card>
                <Title>Recent Transactions</Title>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell> Stock </TableHeaderCell>
                            <TableHeaderCell> Type </TableHeaderCell>
                            <TableHeaderCell> Quantity </TableHeaderCell>
                            <TableHeaderCell> Premium ($) </TableHeaderCell>
                            <TableHeaderCell> Strike ($) </TableHeaderCell>
                            <TableHeaderCell> Date of Purchase </TableHeaderCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            options.map((item, index) =>
                                dateFormatter(item.purchase_date) == 'Invalid Date' ?
                                    null
                                    :

                                    <TableRow key={index}>
                                        <TableCell className="content-center"> <Text> <Button variant="secondary" size="sm"> {item.stock.symbol} </Button> </Text> </TableCell>
                                        <TableCell> <Text> <Badge color={item.type == "put" ? "violet" : "amber"}> {item.type}</Badge> </Text> </TableCell>
                                        <TableCell> <Text> {item.quantity} </Text> </TableCell>
                                        <TableCell> <Text> {item.premium} </Text> </TableCell>
                                        <TableCell> <Text> {item.strike_price} </Text> </TableCell>
                                        <TableCell> <Text> {dateFormatter(item.purchase_date)} </Text> </TableCell>
                                    </TableRow>



                            )
                        }
                    </TableBody>
                </Table>
                <Button
                    size="sm"
                    variant="light"
                    icon={ArrowNarrowRightIcon}
                    iconPosition="right"
                    className="mt-4"
                >
                    View all transactions
                </Button>
            </Card>
        </div>
    )
}