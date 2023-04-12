import { Divider, Grid, Typography } from "@mui/material";

import Navbar from '../components/Navbar';
import DashStockCards from '../components/dashStockCards'

export default function dashboard() {
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
                        Dashboard
                    </Typography>
                </div>

                <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />

                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <Typography variant="h4" color="#293845" m={2}>Your Account</Typography>
                        <DashStockCards />
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="h4" color="#293845" m={2}>Recent Transactions</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}