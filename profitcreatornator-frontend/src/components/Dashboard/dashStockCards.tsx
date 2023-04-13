import { ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { BadgeDelta, Card, Flex, Icon, Metric, Text } from "@tremor/react";

import { Grid } from "@mui/material"
import React from "react";
import { CashIcon, TrendingUpIcon } from "@heroicons/react/outline";

export default function Navbar() {
    return (
        <div>
            <Grid container spacing={2} pl={2}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <ChakraProvider>
                            <Stat>
                                <Flex alignItems="start">
                                    <div>
                                        <Text>CBA</Text>
                                        <Metric>$99.27</Metric>
                                    </div>
                                    <BadgeDelta deltaType="moderateDecrease">-0.49%</BadgeDelta>
                                </Flex>
                                <Text className="truncate">Commonwealth Bank of Australia</Text>
                            </Stat>
                        </ChakraProvider>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <ChakraProvider>
                            <Stat>
                                <Flex alignItems="start">
                                    <div>
                                        <Text>VAS</Text>
                                        <Metric>$90.88</Metric>
                                    </div>
                                    <BadgeDelta deltaType="moderateIncrease">1.15%</BadgeDelta>
                                </Flex>
                                <Text className="truncate">Vanguard Australian Shares Index ETF</Text>
                            </Stat>
                        </ChakraProvider>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <ChakraProvider>
                            <Stat>
                                <Flex alignItems="start">
                                    <div>
                                        <Text>NAB</Text>
                                        <Metric>$28.10</Metric>
                                    </div>
                                    <BadgeDelta deltaType="moderateIncrease">0.15%</BadgeDelta>
                                </Flex>
                                <Text className="truncate">National Australia Bank Ltd.</Text>
                            </Stat>
                        </ChakraProvider>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card decoration="top" decorationColor="orange">
                        <Flex className="space-x-6">
                            <Icon
                                icon={TrendingUpIcon}
                                color="orange"
                                variant="light"
                                size="xl"
                            />
                            <div>
                                <Text>Your Earnings</Text>
                                <Metric>$3342.00</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card decoration="top" decorationColor="orange">
                        <Flex className="space-x-6">
                            <Icon
                                icon={CashIcon}
                                color="orange"
                                variant="light"
                                size="xl"
                            />
                            <div>
                                <Text>Your Balance</Text>
                                <Metric>$1000</Metric>
                            </div>
                        </Flex>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}