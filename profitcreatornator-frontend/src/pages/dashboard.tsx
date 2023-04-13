import { Divider, Grid, Typography } from "@mui/material";

import Navbar from '../components/Navbar';
import DashStockCards from '../components/Dashboard/dashStockCards'
import RecentTransactions from "@/components/Dashboard/RecentTransactionsTable";
import Value from "@/components/Dashboard/value";
import Gain from "@/components/Dashboard/gain";
import Loss from "@/components/Dashboard/loss";
import ExchangeRates from "@/components/Dashboard/exchange";

export default function dashboard() {
    return (
        <div style={{ display: 'flex', marginBottom: "16px" }}>
            <Navbar/>
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
                        Dashboard
                    </Typography>
                </div>

                <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />

                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <Typography variant="h4" color="#293845" m={2}>Your Account</Typography>
                        <DashStockCards />
                    </Grid>
                    <Grid item sm={6} pr={2}>
                        <RecentTransactions />
                    </Grid>
                    <Grid item sm={6}>
                        <Value />
                    </Grid>
                    <Grid item sm={3}>
                        <Gain />
                    </Grid>
                    <Grid item sm={3} pr={2}>
                        <Loss />
                    </Grid>
                    <Grid item sm={12} pl={2} pr={2}>
                        <Typography variant="h4" color="#293845" m={2}>Exchange Rates</Typography>
                        <ExchangeRates />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}