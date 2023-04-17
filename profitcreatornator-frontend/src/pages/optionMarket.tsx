import { Card, Grid, Metric, Text } from "@tremor/react";
import { Divider, Typography, Button } from "@mui/material";

import Navbar from '../components/Navbar';
import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import OptionTable from "@/components/OptionTable";
import OptionModal from "@/components/OptionModal";

import { useState } from "react";
import Header from "@/components/Header";

export default function OptionMarket() {
    const buttonStyle = {
        ':hover': {
            bgcolor: 'white',
            color: 'rgb(44,136,217)',
        },
    }

    const [ModalOpen, setModalOpen] = useState(false);

    const handleOpen = () => setModalOpen(true)
    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <Navbar />
            <div className="content" style={{ width: '100%' }}>
                <div>
                    <Header title=" Options Marketplace" />
                </div>

                <Card>
                    <Typography
                        component="h2"
                        variant="h4"
                        color="#293845"
                    >
                        Place Orders
                    </Typography>
                    <Typography
                        component="h4"
                        variant="h6"
                        color="#293845"
                    >
                        Trading Account: Mr JOHN DOE</Typography>
                    <Button variant="contained"
                        component="label"
                        sx={buttonStyle}
                        onClick={handleOpen}>Create Option</Button>
                </Card>
                <OptionModal openState={ModalOpen} setOpenState={setModalOpen} />
            </div>
        </div>
    )
}