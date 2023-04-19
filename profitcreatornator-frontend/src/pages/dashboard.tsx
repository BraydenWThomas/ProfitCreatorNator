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
        <div className="flex w-full dark:bg-blue-950">
            <div>
            <Navbar active="Dashboard"/>
            </div>
            <div>
                <Header title="Dashboard" />
                <div className="px-6 py-6">
                    <Grid container spacing={2}>
                        <Grid item sm={6}>
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
                            <ExchangeRates />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}