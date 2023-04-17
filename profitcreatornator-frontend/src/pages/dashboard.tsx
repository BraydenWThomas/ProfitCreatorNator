import { Divider, Grid, Typography } from "@mui/material";

import Navbar from '../components/Navbar';
import DashStockCards from '../components/Dashboard/dashStockCards'
import RecentTransactions from "@/components/Dashboard/RecentTransactionsTable";
import Value from "@/components/Dashboard/value";
import Gain from "@/components/Dashboard/gain";
import Loss from "@/components/Dashboard/loss";
import ExchangeRates from "@/components/Dashboard/exchange";
import Header from "@/components/Header";

export default function dashboard() {
    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <div>
            <Navbar active="Dashboard"/>
            </div>
            <div>
                <Header title="Dashboard" />
                <div className="px-2 py-2">
                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <Typography variant="h4" color="#293845" m={2}>Your Account</Typography>
                            <DashStockCards />
                        </Grid>
                        <Grid item sm={6} >
                            <RecentTransactions />
                        </Grid>
                        <Grid item sm={6}>
                            <Value />
                        </Grid>
                        <Grid item sm={3}>
                            <Gain />
                        </Grid>
                        <Grid item sm={3} >
                            <Loss />
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="h4" color="#293845" m={2}>Exchange Rates</Typography>
                            <ExchangeRates />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}