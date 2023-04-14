'use client'
import { Avatar, Button, Checkbox, Divider, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'



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
                    }}
                >
                    <Avatar sx={{ m: 1, height:'350px', width:'350px' }}>
                    </Avatar>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
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
                        <Divider> <Typography>OR</Typography> </Divider>
                        <Button href="http://localhost:8080/api/oauth2/authorization/google">Google Sign-in</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}