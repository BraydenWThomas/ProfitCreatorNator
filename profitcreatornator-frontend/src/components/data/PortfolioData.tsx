// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// END OF IMPORTS 

interface stockInformation {
    id: number;
    name: string;
    symbol: string;
    currentPrice: number;
}

interface portfolioItem {
    id: number;
    quantity: number;
    stock: stockInformation;
}

export default function StockPortfolio() {
    const [stocks, setStocks] = useState<portfolioItem[]>([]) // owned stocks

    useEffect(() => {
            axios.get('http://localhost:8080/api/portfolio/trader/detailed/3') // use 3 for now
        .then(response => {
            console.log(response);
            setStocks(response.data)
        }).catch(error => console.log('error', error));
    }, [])

    return stocks;
}