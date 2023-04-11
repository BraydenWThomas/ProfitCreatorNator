import { Divider, Typography } from "@mui/material";
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, ChakraProvider } from "@chakra-ui/react";



import Navbar from '../components/Navbar';

export default function dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
            <div className="content" style={{ float: 'left', width: '100%' }}>
                <div className="header" style={{ display: "flex" }}>
                    <Typography
                        component="h1"
                        variant="h3"
                        color="#293845"
                        mt={2}
                        ml={2}
                        sx={{ flex: 1 }}
                    >
                        Dashboard
                    </Typography>
                </div>

                <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />

                <div className="commbank-stat">
                    <ChakraProvider>
                        <StatGroup>
                            <Stat>
                                <StatLabel>Sent</StatLabel>
                                <StatNumber>345,670</StatNumber>
                                <StatHelpText>
                                    <StatArrow type='increase' />
                                    23.36%
                                </StatHelpText>
                            </Stat>
                        </StatGroup>
                    </ChakraProvider>
                </div>
            </div>
        </div>
    )
}