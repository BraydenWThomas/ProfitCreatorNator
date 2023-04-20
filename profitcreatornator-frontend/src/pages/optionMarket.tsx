import { Card, Grid, Metric, Text, Button, Title, Subtitle, Flex } from "@tremor/react";
import { Divider, Typography } from "@mui/material";

import Navbar from '../components/Navbar';
import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import OptionTable from "@/components/OptionTable";
import OptionModal, { Stock } from "@/components/OptionModal";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
export interface OptionInfo {
    barrierOption: null
    expiration_date: String
    id: String
    premium: number
    purchase_date: any
    quantity: number
    status: String
    stock: any
    strike_price: number
    style: String
    taker: any
    type: String
    writer: any
}
export default function OptionMarket() {

    const [ModalOpen, setModalOpen] = useState(false);

    const handleOpen = () => setModalOpen(true)

    const [optionInfo, setOptionInfo] = useState<OptionInfo[]>([])



    useEffect(() => {
        const requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch("http://localhost:8080/api/option", requestOptions)
            .then(response => response.json())
            .then(data => {
                setOptionInfo(data.filter((item: OptionInfo) => item.status == "waiting_taker"))

            })
            .catch(error => console.log('error', error));
    }, [])
    return (
        <div style={{ display: 'flex', width: "100%" }}>
            <Navbar active="Marketplace" />
            <div className="content" style={{ width: '100%' }}>
                <div>
                    <Header title=" Options Marketplace" />
                </div>
                <div className="px-6 py-6">
                    <Card>
                        <Flex>
                            <div>
                                <Title>
                                    Place Orders
                                </Title>
                                <Text>
                                    Trading Account: Mr JOHN DOE
                                </Text>
                            </div>
                            <Button variant="secondary"
                                onClick={handleOpen}>Create Option
                            </Button>
                        </Flex>
                    </Card>
                    <OptionModal openState={ModalOpen} setOpenState={setModalOpen} optionInfo={optionInfo} setOptionInfo={setOptionInfo} />
                </div>
            </div>
        </div>
    )
}