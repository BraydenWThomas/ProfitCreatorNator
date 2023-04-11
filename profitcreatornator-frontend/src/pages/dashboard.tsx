import { Card, Grid, Metric, Text } from "@tremor/react";
import { Divider, Typography } from "@mui/material";

import Navbar from '../components/navbar';
import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

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

                <Typography variant="h4" sx={{m:2}}>Your Account</Typography>
                <Grid numColsLg={3} className="mt-6 gap-6">
                    <div className="CBA-stat">
                        <Card className="max-w-xs mx-auto">
                            <ChakraProvider>
                                <Stat>
                                    <StatLabel>Commonwealth Bank of Australia</StatLabel>
                                    <StatNumber>$99.70</StatNumber>
                                    <StatHelpText>
                                        <StatArrow type='increase' />
                                        0.69%
                                    </StatHelpText>
                                </Stat>
                            </ChakraProvider>
                        </Card>
                    </div>
                    <div className="VAS-stat">
                        <Card className="max-w-xs mx-auto">
                            <ChakraProvider>
                                <Stat>
                                    <StatLabel>Vanguard Australian Shares Index ETF</StatLabel>
                                    <StatNumber>$90.88</StatNumber>
                                    <StatHelpText>
                                        <StatArrow type='increase' />
                                        1.15%
                                    </StatHelpText>
                                </Stat>
                            </ChakraProvider>
                        </Card>
                    </div>
                    <div className="NASDAQ-stat">
                        <Card className="max-w-xs mx-auto">
                            <ChakraProvider>
                                <Stat>
                                    <StatLabel>Nasdaq Inc</StatLabel>
                                    <StatNumber>$54.38</StatNumber>
                                    <StatHelpText>
                                        <StatArrow type='decrease' />
                                        0.54%
                                    </StatHelpText>
                                </Stat>
                            </ChakraProvider>
                        </Card>
                    </div>
                </Grid>
            </div>
        </div>
    )
}