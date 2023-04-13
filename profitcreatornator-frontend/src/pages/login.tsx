import {  Button, Checkbox, Divider, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

import Image from 'next/image'

export default function login() {
    return (
        <div>
            <Container component='main' maxWidth='xs'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt:20
                    }}
                >
                    <Image src={"/logo.png"} alt='logo' width={360} height={640}/>
                    <Box component="form" noValidate sx={{ mt: 10 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            href="/dashboard"
                        >
                            LOGIN
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}