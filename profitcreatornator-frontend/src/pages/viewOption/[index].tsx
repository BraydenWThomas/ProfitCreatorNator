import { Card, Metric, Text, Button } from "@tremor/react";
import { Divider, Typography, Grid } from "@mui/material";
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
import { Stock } from "@/components/OptionModal";

export default function OptionMarket() {
    
    const buttonStyle = {
        ':hover': {
            bgcolor: 'white',
            color: 'rgb(44,136,217)',
        },
    }
    const [id, setId] = useState<any>();
    const router = useRouter()

    useEffect(() => { 
        
        if(router.isReady){
            setId(Object.entries(router.query)[0][1])
        }
      
    }, [router])

    const [optionDetail, setOptionDetail] = useState<OptionInfo>({
        barrierOption: null,
        expiration_date: "2023-04-17T00:00:00",
        id: "0",
        premium: 0,
        purchase_date: null,
        quantity: 0,
        status: "waiting_taker",
        stock: null,

        strike_price: 0,
        style: "European",
        taker: null,
        type: "put",
        writer: null

    })
    useEffect(() => {
        if (id != undefined){
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
        }

    }, [id])

    const back = () => {
        window.history.back()
    }

    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <div>
                <Navbar active="Marketplace" />
            </div>
            <div style={{ width: "100%" }}>
                <Header title={id == undefined ? "Option" : "Option " + id} />
                <div className="px-4 py-2">
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <StockPriceCard
                                symbol="Current Price"
                                deltaType="moderateIncrease"
                                isIncreasePositive={true}
                                stockPrice="174.93" />
                        </Grid>

                        <Grid item sm={9}>
                            <Title style={{fontSize: '50px', marginBottom: '2%', marginTop: '0.5%'}}>{optionDetail.stock ? optionDetail.stock.name : ""}</Title>
                            <Value />
                        </Grid>
                        <Grid item sm={3}>

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
                                        <span>Writer</span>
                                        <span>{optionDetail.writer ? optionDetail.writer.name : null}</span>
                                    </ListItem>
                                    <ListItem>
                                        <span>Strike Price</span>
                                        <span>{optionDetail.strike_price}</span>
                                    </ListItem>
                                    <ListItem>
                                        <span>Option Expiration Date</span>
                                        <span>{optionDetail.expiration_date.toString().substring(0, 10)}</span>
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
                <Button 
                    onClick={back} className="mt-3">Back</Button>
                </div>
            </div>
        </div >
    )
}