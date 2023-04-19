
"use client"
import { Box, Container, Divider, Fade, Grid, Menu, Modal, TextField, Typography, Button, InputAdornment, FormControl, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import OptionTable from "./OptionTable";
import { Toggle, ToggleItem } from "@tremor/react";
import { OptionInfo } from "@/pages/optionMarket";
export interface Stock {
  id: String
  name: String
  symbol: String
  currentPrice: number
}
export default function OptionModal({ openState, setOpenState, optionInfo, setOptionInfo }:
  { optionInfo: OptionInfo[], setOptionInfo: Dispatch<SetStateAction<OptionInfo[]>>, openState: boolean, setOpenState: Dispatch<SetStateAction<boolean>> }) {

  const [optionType, setOptionType] = useState("put");
  const handleClose = () => setOpenState(false)
  const [units, setUnits] = useState(0);
  const [strike, setStrike] = useState(0);
  const [price, setPrice] = useState(300);
  const [optionStyle, setOptionStyle] = useState("European");
  const [premium, setPremium] = useState(0);
  const [stockInfo, setStockInfo] = useState<Stock[]>([])
  const [selectedStock, setSelectedStock] = useState<Stock>()
 
  const style = {
    ':hover': {
      bgcolor: 'white',
      color: 'rgb(44,136,217)',
    },
  }

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/stock", requestOptions)
      .then(response => response.json())
      .then(result => setStockInfo(result))
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
   setSelectedStock(stockInfo[0])
  }, [stockInfo])

  const createOption = () => {

    const option = {
      stock: selectedStock,
      taker: null,
      writer: null,
      style: optionStyle,
      strike_price: strike,
      type: optionType,
      premium: premium,
      expiration_date: "2023-04-17T00:00:00",
      purchase_date: null,
      status: "waiting_taker",
      quantity: 2,
      barrierOption: null
    }

    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(option),
      redirect: 'follow',
      headers: { 'content-type': 'application/json' }
    };

    fetch("http://localhost:8080/api/option", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('error', error));
    
    
    setOpenState(false)
    window.location.reload();
  }
  return (
    <>
      <Modal
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
        open={openState}
        sx={{
          boxShadow: 24
        }}
      >
        <Box style={{ backgroundColor: 'rgb(195,207,217)', transform: 'translate(100%, 30%)', width: '30%', height: '60%' }}>
          <Container component="main">
            <div className="header" style={{ display: "flex" }}>
              <Typography component="h1" variant="h3" mt={2} sx={{ flex: 1, color: 'rgb(41,56,69)' }}>Create Option</Typography>
            </div>
            <Box
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                mt: 3,
              }}>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Typography component="h1" variant="h5" mt={2} sx={{ flex: 1, color: 'rgb(41,56,69)' }}>Trading Account: John</Typography>
              <Grid item sm={3}>

                <TextField
                  id="search"
                  type="search"
                  label="Search"
                  // value={searchTerm}
                  // onChange={handleChange}
                  sx={{ width: '100%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton type="submit" aria-label="search">
                          <SearchIcon style={{ fill: "gray" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

              </Grid>

              <div style={{ display: 'flex' }}>
                <div>
                  <div style={{ marginBottom: '5%' }}>
                    <Typography component="h2" variant="h6" mb={2} style={{ fontWeight: 700, marginBottom: '0.2%' }}> Order Type </Typography>
                    <Toggle style={{ fontWeight: '700' }} defaultValue="put" onValueChange={(value) => setOptionType(value)}>

                      <ToggleItem value="put" text="PUT" />
                      <ToggleItem value="call" text="CALL" />
                    </Toggle>

                  </div>

                  <Grid >

                    <Grid item xs={12} sm={4}>

                      <TextField

                        helperText={"Required field"}
                        type="number"
                        label="UNITS"

                        onChange={(e) => {
                          setUnits(parseInt(e.target.value))
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        type="number"
                        helperText={"Required field"}
                        label="STRIKE PRICE"
                        onChange={(e) => {
                          setStrike(parseInt(e.target.value))
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField

                        helperText={"Required field"}
                        label="PREMIUM"
                        onChange={(e) => {
                          setPremium(parseInt(e.target.value))
                        }}
                      />
                    </Grid>

                  </Grid>
                </div>

                <Box sx={{ marginLeft: '10%', width: '70%' }}>
                  <Typography component="h2" variant="h6" mb={2} style={{ fontWeight: 700, marginBottom: '0.2%' }}> Order Style </Typography>
                  <Toggle style={{ fontWeight: '700' }} defaultValue="European" onValueChange={(value) => setOptionStyle(value)}>

                    <ToggleItem value="European" text="European" />
                    <ToggleItem value="American" text="American" />
                  </Toggle>
                  <Typography component="h2" variant="h6" mb={2} style={{ fontWeight: 700, marginTop: '2%' }}> Option Evaluation </Typography>

                  {stockInfo[0] ? stockInfo.map((item, index) => (<Button key={index} variant="outlined" onClick={() => {
                    setSelectedStock(item);
                    
                  }}>{item.name}</Button>)) : <h1>hi</h1>}
                  <p>{selectedStock == undefined ? null : selectedStock.name}</p>
                </Box>

              </div>

              <Divider sx={{ mt: 2, mb: 2 }} />

              <div style={{ display: 'flex', float: 'right' }}>
                <Button
                  variant="contained"
                  component="label"

                  sx={
                    style
                  }
                  style={{ marginRight: "16px", fontWeight: 700 }}
                  onClick={createOption}>
                  Create Option
                </Button>
                <Button
                  variant="contained"
                  component="label"


                  onClick={handleClose}
                  sx={
                    style
                  }
                  style={{ fontWeight: 700 }}
                >
                  Cancel
                </Button>
              </div>


            </Box>
          </Container>
        </Box>

      </Modal>
      <OptionTable tablerows={optionInfo} />
    </>
  )
}
