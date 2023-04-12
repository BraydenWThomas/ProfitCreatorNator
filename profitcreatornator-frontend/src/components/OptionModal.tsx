
"use client"
import { Backdrop, Box, Container, Divider, Fade, Grid, Menu, Modal, TextField, Typography, Button, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useRef } from 'react'


export default function BasicUsage() {
  const name = 'John'
  const [ModalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [activeButton, setActiveButton] = useState(0);
  const setPut = () => setActiveButton(1);
  const setCall = () => setActiveButton(2);
  const style = {
    ':hover': {
      bgcolor: 'white', 
      color: 'rgb(44,136,217)',
     

    },
 
  }
  const nonActiveStyle = {
    bgcolor: 'white', 
    color: 'rgb(44,136,217)',
  }
  const activeStyle = {
    
      bgcolor: 'rgb(44,136,217)', 
      color: 'white',

  }
  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
        open={ModalOpen}
        sx={{boxShadow: 24,
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
              <Typography component="h1" variant="h5" mt={2} sx={{ flex: 1, color: 'rgb(41,56,69)' }}>Trading Account: {name}</Typography>
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
              <div style={{display: 'flex'}}>
              <div>
                <div style={{marginBottom: '5%'}}>
                <Typography component="h2" variant="h6" mb={2} style={{ fontWeight: 700,marginBottom: '0.2%' }}> Order Type </Typography>
                <Button
                  variant="contained"
                  component="label"
                  onClick={setPut}
                  sx={activeButton == 1 ? activeStyle :
                    nonActiveStyle
                  }
                  style={{ fontWeight: 700 }}
                  >
                  PUT
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  onClick={setCall}
                  sx={activeButton == 2 ? activeStyle :
                    nonActiveStyle
                  }
                  style={{ marginRight: "16px", fontWeight: 700 }}>
                  CALL
                </Button>
                </div>
                
                <Grid >

                  <Grid item xs={12} sm={4}>
                  
                    <TextField

                      helperText={"Required field"}

                      label="UNITS"

                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField

                      helperText={"Required field"}
                      label="STRIKE PRICE"

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
                 
              <Box sx={{marginLeft: '10%', border: '2px solid rgb(158,173,186)', width: '70%', backgroundColor: 'rgb(227,232,237)'}}>
                <Typography component="h2" variant="h6" mb={2} style={{marginTop: '2%', marginLeft: '2%' }}> Option Evaluation </Typography>
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
                  style={{ marginRight: "16px", fontWeight: 700 }}>
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
    </>
  )
}
