'use client'
import { Typography } from "@mui/material";

import Navbar from '../components/ui/navbar';

export default function dashboard(){
    return(
        <div>
            <Navbar/>
            <Typography variant="h2">Dashboard</Typography>
        </div>
    )
}