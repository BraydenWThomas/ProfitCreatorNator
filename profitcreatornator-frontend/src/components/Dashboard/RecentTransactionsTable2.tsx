
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Badge, BadgeDelta, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";

interface OptionsProperties {
    id: number;
    expirationDate: string;
    premium: number;
    purchaseDate: string;
    quantity: number;
    status: string;
    strikePrice: number;
    style: string;
    type: string;
    barrierOptionId?: number;
}

interface UserProps {
    active: number
}

export default function RecentTransactions({ active }: UserProps) {
    const [options, setOptions] = useState<OptionsProperties[]>([]); // owned stocks

    // Make this more effecient, use that data component
    useEffect(() => {
        let temp = [];
            axios.get('http://localhost:8080/api/option/' + active + '/taker')
            .then(response => {
                //console.log(response);
                setOptions(response.data)
            }).catch(error => console.log('error', error));
    }, [])

    console.log("Options t");
    console.log(options);
    return (
        <div className="recent-transactions">
            <Card>
                <Title>Recent Transactions</Title>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell> ID </TableHeaderCell>
                            <TableHeaderCell> Type </TableHeaderCell>
                            <TableHeaderCell> Style </TableHeaderCell>
                            <TableHeaderCell> Quantity </TableHeaderCell>
                            <TableHeaderCell> Premium ($) </TableHeaderCell>
                            <TableHeaderCell> Strike ($) </TableHeaderCell>
                            <TableHeaderCell> Date of Purchase </TableHeaderCell>
                            <TableHeaderCell> Date of Expiry </TableHeaderCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            options.map((item, index) =>
                                <TableRow key={index}>
                                    <TableCell> <Text> {item.id} </Text> </TableCell>
                                    <TableCell> <Text> {item.type} </Text> </TableCell>
                                    <TableCell> <Text> {item.style} </Text> </TableCell>
                                    <TableCell> <Text> {item.quantity} </Text> </TableCell>
                                    <TableCell> <Text> {item.premium} </Text> </TableCell>
                                    <TableCell> <Text> {item.strikePrice} </Text> </TableCell>
                                    <TableCell> <Text> {item.purchaseDate} </Text> </TableCell>
                                    <TableCell> <Text> {item.expirationDate} </Text> </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}