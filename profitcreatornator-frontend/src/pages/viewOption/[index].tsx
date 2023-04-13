import { Card, Grid, Metric, Text } from "@tremor/react";
import { Divider, Typography, Button } from "@mui/material";
import Value from "@/components/Dashboard/value";

import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { List, ListItem, Title } from "@tremor/react";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter} from 'next/router'
import { url } from "inspector";
import Link from "next/link";
import StockInfoList from "@/components/StockInfo/StockInfoList";
import StockPriceCard from "@/components/StockInfo/StockPriceCard"
export default function OptionMarket() {
    const buttonStyle = {
        ':hover': {
            bgcolor: 'white',
            color: 'rgb(44,136,217)',
        },
    }
    const router = useRouter()
    const id = Object.entries(router.query)[0][1];

    return (
        <div style={{ display: 'flex' }}>
             <Navbar />
            <div className="content" style={{ float: 'left', width: '100%' }}>
                <div className="header" style={{ display: "flex" }}>
                    <Typography
                        component="h1"
                        variant="h3"
                        color="#293845"
                        mt={2}
                        ml={2}
                        sx={{ flex: 1 }}
                    >
                        Option {id}
                    </Typography>
                </div>

                <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />
                <div>
        
       </div>
                <div style={{marginLeft: '1%', marginRight: '1%', width: '98%', display: 'flex'}}>
                <div style={{ width: '20%'}}>
            <StockPriceCard 
            symbol="Current Price" 
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            stockPrice="$ 174.93"/>
            <StockInfoList 
            marketCap="572.187B" 
            previousClose="187.23"
            open="190.78"
            volume="148,418,050"
            dayRange="180.31 - 191.58"/>

        </div>
        <div  style={{ width: '160%'}}>
        <Value />
        </div>
        </div>
        <Card style={{marginLeft: '1%', marginTop: '1%', marginBottom: '1%', width: '20%'}}>
            <Title>Option Details</Title>
            <List>
                <ListItem>
                    <span>Strike Price</span>
                    <span>$5552</span>
                </ListItem>
                <ListItem>
                    <span>Option Time span</span>
                    <span>3 years</span>
                </ListItem>
                <ListItem>
                    <span>Premium</span>
                    <span>$35</span>
                </ListItem>
                <ListItem>
                    <span>Stock Volume</span>
                    <span>500</span>
                </ListItem>
            </List>
        </Card>
                <Button variant="contained"
                        component="label"
                        sx={buttonStyle}
                        onClick={router.back}
                        style={{marginLeft: '1%'}}>Back</Button>
            </div>
        </div>
    )
}