// IMPORTS
import StatBox from "@/components/Portfolio/StatBox";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Heroicons
import { CashIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";

// Material UI
import { Box, Button } from "@mui/material";

// END OF IMPORTS

interface OptionsProperties {
    barrierOptions: BarrierOptions;
    expiration_date: Date;
    id: number;
    premium: number;
    purchase_date?: Date;
    quantity: number;
    status: string;
    stock: Stock;
    strike_price: number;
    style: string;
    taker: Taker;
    type: string;
    writer: Writer;
}

interface BarrierOptions {
    id: number;
    status?: string;
    threshold: number;
    type?: string;
}

interface Stock {
    currentPrice: number;
    id: number;
    name: string;
    symbol: string;
}

interface Taker {
    id: number;
    name: string;
}

interface Writer {
    id: number;
    name: string;
}

interface UserProps {
    active: number
}

export default function StatCardsView({ active }: UserProps) {

    const [options, setOptions] = useState<OptionsProperties[]>([]);

    // API Call to get option information based on user
    useEffect(() => {
        axios.get('http://localhost:8080/api/option/' + active + '/all')
            .then(response => {
                setOptions(response.data)
            }).catch(error => console.log('error', error));
    }, [])

    var buyPayoff = 0;
    var buyProfit = 0;
    var sellPayoff = 0;
    var sellProfit = 0;
    var totalProfit = 0;

    var countCurr = 0;
    var countPend = 0;

    options.map((item) => {

        console.log(options)

        // Calculate profit of all options
        //if (item.status == "exercised") {
        if (item.type == "call") {
            buyPayoff += (item.stock.currentPrice - item.strike_price);
            buyProfit += (item.premium - buyPayoff)
        } else {
            sellPayoff += (item.stock.currentPrice - item.strike_price);
            sellProfit += (item.premium + buyPayoff)
        }
        //}


        // if (item.type == "call") {
        //     buyPayoff += (item.stock.currentPrice - item.strike_price);
        //     buyProfit += (item.premium - buyPayoff)
        // } else {
        //     sellPayoff += (item.stock.currentPrice - item.strike_price);
        //     sellProfit += (item.premium + buyPayoff)
        // }

        // Count pending options
        if (item.status == "waiting_taker") {
            countPend++;
        }

        if (item.status == "waiting_exercise") {
            countCurr++;
        }

    })

    return (
        <Box textAlign='center' className="ml-4">
            <StatBox icon={ChartBarIcon}
                title={"Earnings"}
                total={"$ " + (sellProfit + buyProfit).toFixed(3)}
                color="rose" />
            <StatBox icon={CashIcon}
                title={"Current Options"}
                total={countCurr}
                color="amber" />
            <StatBox icon={ClockIcon}
                title={"Pending Options"}
                total={countPend}
                color="stone" />
            <Button className='w-full mx-auto' variant="contained" sx={{ backgroundColor: "lightpurple" }} href='/analytics'> View Analytics </Button>
        </Box>
    )
}