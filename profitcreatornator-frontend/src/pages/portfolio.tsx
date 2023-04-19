// IMPORTS
import Navbar from '../components/Navbar';
import StatBox from "@/components/Portfolio/StatBox";
import RecentTransactions from '@/components/Dashboard/RecentTransactionsTable';
import RecentTransactions2 from '@/components/Dashboard/RecentTransactionsTable2';
import StockPortfolio from '../components/Portfolio/StockPortfolio';
import StockPortfolio2 from '../components/Portfolio/StockPortfolio2';
import PortfolioData from '../components/data/PortfolioData';
import StockPie from '../components/Portfolio/StockPie';
import StockPie2 from '../components/Portfolio/StockPie2';
import Performance from "../components/Portfolio/Performance";

import React, { useEffect, useState } from "react";
import axios from "axios";

// Heroicons
import { CashIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";

// Material UI
import { Box, Button, Container, Divider, Typography } from "@mui/material";

// TREMOR SO
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import Header from '@/components/Header';

// END OF IMPORTS

export default function portfolio() {

    const noForUser = 4
    ; // for sake of testing user without login

    // const [stocks, setStocks] = useState([])
    // const [portfolio, setPortfolio] = useState([])

    // Get stocks for 'My Holdings'
    // useEffect(() => {
    //     Promise.all([
    //         axios.get('http://localhost:8080/api/portfolio/trader/detailed/3'), // use 3 for now
    //         axios.get('http://localhost:8080/api/portfolio/trader/3') // use 3 for now
    //     ]).then(response => {
    //         console.log(response);
    //         setStocks(response[0].data)
    //         setPortfolio(response[1].data)
    //     }).catch(error => console.log('error', error));
    // }, [])

    // console.log(stocks)
    // console.log(portfolio)

    // console.log(stocks)

    // FETCH DATA

    // END OF DATA FETCH


    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <div>
                <Navbar active='Portfolio' />
            </div>
            {/* recent transactions can use a date silter maybe. Y/Qtr/M/W */}
            <div style={{ width: '100%' }}>
                <Header title="Portfolio" />
                <div className="px-2 py-2">
                    <div style={{ clear: "both", marginBottom: "16px" }}>
                        <Typography variant="h4" color="#293845" mx={2} mb={2} style={{ float: "left" }}> My Holdings </Typography>
                        <Button variant="contained" style={{ float: "right" }} href='/'> Buy / sell </Button> {/* Take you to 'Buy/sell' */}
                        <div style={{ clear: "both" }} />
                        <RecentTransactions2 active={noForUser}/>
                    </div>

                    <div style={{ clear: "both" }}>
                                <StockPortfolio2 active={noForUser} />
                    </div>

                    <Divider sx={{ mt: 2, mb: 2 }} />

                    <div style={{ clear: "both", marginBottom: "16px" }}>
                        <Typography variant="h4" color="#293845" mx={2} mb={2}> My Performance </Typography>
                        <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
                            <Col numColSpan={2} numColSpanLg={2}>
                                <Performance />
                            </Col>
                            <Col>

                                <Box textAlign='center' className="ml-4">
                                    <StatBox icon={CashIcon}
                                        title={"Profit"}
                                        total={"$834.95"}
                                        color="amber" />
                                    <StatBox icon={ChartBarIcon}
                                        title={"Earnings"}
                                        total={"$350.51"}
                                        color="rose" />
                                    <StatBox icon={ClockIcon}
                                        title={"Pending Options"}
                                        total={"4"}
                                        color="stone" />
                                    <Button className='w-full mx-auto' variant="contained" sx={{ backgroundColor: "lightpurple" }} href='/analytics'> View Analytics </Button> {/* Take you to 'Analytics' */}
                                </Box>
                            </Col>

                        </Grid>
                    </div>
                </div>
            </div>
        </div>

    );
}