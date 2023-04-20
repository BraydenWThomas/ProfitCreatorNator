// IMPORTS
import Navbar from '../components/Navbar';
import StatBox from "@/components/Portfolio/StatBox";
// import RecentTransactions from '@/components/Dashboard/RecentTransactionsTable';
import RecentTransactions2 from '@/components/Dashboard/RecentTransactionsTable2';
// import StockPortfolio from '../components/Portfolio/StockPortfolio';
import StockPortfolio2 from '../components/Portfolio/StockPortfolio2';
// import StockPie from '../components/Portfolio/StockPie';
// import StockPie2 from '../components/Portfolio/StockPie2';
import Performance from "../components/Portfolio/Performance";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// Material UI
import { Button, Divider, Typography } from "@mui/material";

// TREMOR SO
import { Grid, Col } from "@tremor/react";
import Header from '@/components/Header';
import StatCardsView from '@/components/Portfolio/StatCardsView';

// END OF IMPORTS

export default function portfolio() {

    const userPH = 1; // User Place Holder

    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <div>
                <Navbar active='Portfolio' />
            </div>
            {/* recent transactions can use a date silter maybe. Y/Qtr/M/W */}
            <div style={{ width: '100%' }}>
                <Header title="Portfolio" />
                <div className="px-6 py-6">
                    <div style={{ clear: "both", marginBottom: "16px" }}>
                        <Typography variant="h4" color="#293845" mx={2} mb={2} style={{ float: "left" }}> My Holdings </Typography>
                        <Button variant="contained" style={{ float: "right" }} href='/'> Buy / sell </Button> {/* Take you to 'Buy/sell' */}
                        <div style={{ clear: "both" }} />
                        <RecentTransactions2 active={userPH} />
                    </div>

                    <div style={{ clear: "both" }}>
                        <StockPortfolio2 active={userPH} />
                    </div>

                    <Divider />

                    <div style={{ clear: "both", marginBottom: "16px" }}>
                        <Typography variant="h4" color="#293845" mx={2} mb={2}> My Performance </Typography>
                        <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
                            <Col numColSpan={2} numColSpanLg={2}>
                                <Performance />
                            </Col>
                            <Col>
                                <div>
                                    <StatCardsView active={userPH}/>
                                </div>
                            </Col>

                        </Grid>
                    </div>
                </div>
            </div>
        </div>

    );
}