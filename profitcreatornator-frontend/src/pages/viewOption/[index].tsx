import { Card, Metric, Text } from "@tremor/react";
import { Divider, Typography, Button, Grid } from "@mui/material";
import Value from "@/components/Dashboard/value";

import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { List, ListItem, Title } from "@tremor/react";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { url } from "inspector";
import Link from "next/link";
import StockInfoList from "@/components/StockInfo/StockInfoList";
import StockPriceCard from "@/components/StockInfo/StockPriceCard"
import Header from "@/components/Header";
import { OptionInfo } from "../optionMarket";
export default function OptionMarket() {
    const buttonStyle = {
        ':hover': {
            bgcolor: 'white',
            color: 'rgb(44,136,217)',
        },
    }
    const router = useRouter()
    const id = Object.entries(router.query)[0][1];
    const [optionDetail, setOptionDetail] = useState<OptionInfo>({
        expiration_date: "2023-04-17T00:00:00",
        id: "0",
        premium: 0,
        purchase_date: null,
        quantity: 0,
        status: "waiting_taker",
        strike_price: 0,
        style: "European",
        type: "put"
  
      })
    useEffect(() => {
        const requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch("http://localhost:8080/api/option/" + id, requestOptions)
            .then(response => response.json())
            .then(data => {
                setOptionDetail(data)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <div>
            <Navbar active="Marketplace"/>
            </div>
            <div style={{ width: "100%" }}>
                <Header title="Option" />
                <div className="px-4 py-2">
                    <Grid container spacing={2}>
                        <Grid item sm={9}>
                            <Value />
                        </Grid>
                        <Grid item sm={3}>
                                <StockPriceCard
                                    symbol="Current Price"
                                    deltaType="moderateIncrease"
                                    isIncreasePositive={true}
                                    stockPrice="$ 174.93" />
                                <StockInfoList
                                    marketCap="572.187B"
                                    previousClose="187.23"
                                    open="190.78"
                                    volume="148,418,050"
                                    dayRange="180.31 - 191.58" />

                       


                        <Card>
                            <Title>Option Details</Title>
                            <List>
                                <ListItem>
                                    <span>Strike Price</span>
                                    <span>{optionDetail.strike_price}</span>
                                </ListItem>
                                <ListItem>
                                    <span>Option Expiration Date</span>
                                    <span>{optionDetail.expiration_date.toString().substring(0,10)}</span>
                                </ListItem>
                                <ListItem>
                                    <span>Premium</span>
                                    <span>{optionDetail.premium}</span>
                                </ListItem>
                                <ListItem>
                                    <span>Stock Volume</span>
                                    <span>{optionDetail.quantity}</span>
                                </ListItem>
                            </List>
                        </Card> </Grid>
                    </Grid>
                </div>
                <Button variant="contained"
                    component="label"
                    sx={buttonStyle}
                    onClick={router.back}
                    style={{ marginLeft: '1%' }}>Back</Button>

            </div>
        </div >
    )
}