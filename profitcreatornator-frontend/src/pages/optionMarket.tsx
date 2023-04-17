import { Card, Grid, Metric, Text } from "@tremor/react";
import { Divider, Typography, Button } from "@mui/material";

import Navbar from '../components/Navbar';
import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import OptionTable from "@/components/OptionTable";
import OptionModal from "@/components/OptionModal";

import { useState } from "react";

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
        <div style={{ display: 'flex' }}>
            <Navbar active="Marketplace"/>
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
                        Options Marketplace
                    </Typography>
                </div>

                <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />
                <div style={{ marginLeft: '1%', marginRight: '1%', width: '98%', marginBottom: '1%', border: '2px solid rgb(41,56,69)' }}>
                    <Typography
                        component="h2"
                        variant="h4"
                        color="#293845"
                        mt={2}
                        ml={2}
                      
                        sx={{ flex: 1 }}
                    >
                        Place Orders
                    </Typography>
                    <Typography
                    component="h4"
                        variant="h6"
                        color="#293845"
                        mt={2}
                        ml={2}
                      
                        sx={{ flex: 1 }}>Trading Account: Mr JOHN DOE</Typography>
                    <Button variant="contained"
                        component="label"
                        sx={buttonStyle}
                       
                        style={{ marginLeft: '0.5%', marginTop: '1%', marginBottom: '1%', fontWeight: 700 }} 
                        onClick={handleOpen}>Create Option</Button>
                </div>
                <OptionModal openState={ModalOpen} setOpenState={setModalOpen} />
            </div>
        </div>
    )
}