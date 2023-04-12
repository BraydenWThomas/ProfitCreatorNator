import { Card, Grid, Metric, Text } from "@tremor/react";
import { Divider, Typography } from "@mui/material";

import Navbar from '../components/Navbar';
import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import OptionTable from "@/components/OptionTable";
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
                <OptionTable />
            </div>
        </div>
    )
}