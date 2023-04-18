// React
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";

// Components
import Value from "@/components/Dashboard/value";
import StockInfoList from "@/components/StockInfo/StockInfoList";
import StockPriceCard from "@/components/StockInfo/StockPriceCard";

// Design Frameworks
import { Card, List, ListItem, Title } from "@tremor/react";
import { Grid } from "@mui/material";

export default function DetailedOption({ stockId, optionId }: any) {
  // Get details for specific id
  const [stock, setStock] = useState<{[key: string]: any}>({});
  const [option, setOption] = useState<{[key: string]: any}>({});

  // URL
  const API_URL = "http://localhost:8080/api";

  // Fetch request
  useEffect(() => {
    Promise.all([
      axios.get(API_URL + "/stock/" + stockId),
      axios.get(API_URL + "/option/" + optionId)
    ]).then(response => {
      setStock(response[0].data);
      setOption(response[1].data);
    }).catch(error => console.log("error", error));
  }, [stockId, optionId])

  // Convert date to DD-MM-YYYY LT
  dayjs.extend(customParseFormat);
  const formattedDate = dayjs(option.expiration_date).format("MMMM D, YYYY hh:mm:ss")

  return (
    <div className="px-4 py-2">
      <Grid container spacing={2}>
        <Grid item sm={9}>
          <Value />
        </Grid>
        <Grid item sm={3}>
          <StockPriceCard
            symbol={stock.symbol}
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            stockPrice={stock.currentPrice} />
          <StockInfoList
            marketCap="572.187B"
            previousClose="187.23"
            open="190.78"
            volume="148,418,050"
            dayRange="180.31 - 191.58" />
          <Card>
            <Title>Option Details</Title>
            <List>
              <ListItem>
                <span> Strike Price </span>
                <span> {option.strike_price} </span>
              </ListItem>
              <ListItem>
                <span> Expiration </span>
                <span> {formattedDate} </span>
              </ListItem>
              <ListItem>
                <span> Premium</span>
                <span> {option.premium} </span>
              </ListItem>
              <ListItem>
                <span> Stock Volume </span>
                <span> {option.quantity} </span>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}