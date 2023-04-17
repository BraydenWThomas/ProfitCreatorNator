
"use client"
import { Box, Container, Divider, Fade, Grid, Menu, Modal, TextField, Typography, Button, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { useState, Dispatch, SetStateAction } from "react";
import OptionTable from "./OptionTable";
import { Toggle, ToggleItem } from "@tremor/react";
import { OptionInfo } from "@/pages/optionMarket";

export default function OptionModal({openState, setOpenState, optionInfo, setOptionInfo} : 
  {optionInfo : OptionInfo[], setOptionInfo : Dispatch<SetStateAction<OptionInfo[]>>, openState : boolean, setOpenState : Dispatch<SetStateAction<boolean>>}) {
  
  const [optionType, setOptionType] = useState("put");
  const handleClose = () => setOpenState(false)
  const [units, setUnits] = useState(0);
  const [strike, setStrike] = useState(0);
  const [price, setPrice] = useState(300);
  

  const style = {
    ':hover': {
      bgcolor: 'white',
      color: 'rgb(44,136,217)',
    },
  }


  const createOption = () => {

    const option = {
      expiration_date: "2023-04-17T00:00:00",
      id: "0",
      premium: 0.58,
      purchase_date: null,
      quantity: 2,
      status: "waiting_taker",
      strike_price: 114.63,
      style: "European",
      type: "put"

    }

    setOptionInfo([...optionInfo, option])


    setOpenState(false)
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
        <Box style={{ backgroundColor: 'rgb(195,207,217)', transform: 'translate(180%, 30%)', width: '20%', height: '50%' }}>
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
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: '2%',
                  paddingBottom: '2%',


                }}
              >

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

              </div>
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

                      />
                    </Grid>

                  </Grid>
                </div>

                <Box sx={{ marginLeft: '10%', border: '2px solid rgb(158,173,186)', width: '70%', backgroundColor: 'rgb(227,232,237)' }}>
                  <Typography component="h2" variant="h6" mb={2} style={{ marginTop: '2%', marginLeft: '2%' }}> Option Evaluation </Typography>
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
