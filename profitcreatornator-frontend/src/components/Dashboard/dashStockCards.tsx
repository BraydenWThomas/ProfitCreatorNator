import { BadgeDelta, Card, Flex, Icon, Metric, Subtitle, Text, Title } from "@tremor/react";

import { Grid } from "@mui/material"
import React from "react";
import { CashIcon, TrendingUpIcon } from "@heroicons/react/outline";

export default function YourAccount() {
    const dummyList = [
        { code: "CBA", value: "$99.27", performance: -0.49, name: "Commonwealth Bank of Australia" },
        { code: "VAS", value: "$90.88", performance: 1.15, name: "Vanguard Australian Shares Index ETF" },
        { code: "NAB", value: "$28.10", performance: 0.15, name: "National Australia Bank Ltd." }
    ]

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <div className="flex flex-row...">
                        {dummyList.map((holdings) =>
                            <Card key={holdings.code} style={{ margin: "0 3px" }}>
                                <Flex alignItems="start">
                                    <div>
                                        <Subtitle> {holdings.code} </Subtitle>
                                        <Metric> {holdings.value} </Metric>
                                        <Text> {holdings.name} </Text>
                                    </div>
                                    {
                                        holdings.performance > 0 ?
                                            <BadgeDelta deltaType="moderateIncrease"> {holdings.performance}% </BadgeDelta>
                                            :
                                            <BadgeDelta deltaType="moderateDecrease"> {holdings.performance}% </BadgeDelta>
                                    }
                                </Flex>
                            </Card>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <div className="flex flex-row...">
                        <Card decoration="top" decorationColor="orange" style={{ margin: "0 3px", paddingTop: '38px', paddingBottom: '38px' }}>
                            <Flex>
                                <Icon
                                    icon={TrendingUpIcon}
                                    color="orange"
                                    variant="light"
                                    size="xl"
                                />
                                <div>
                                    <Subtitle>Your Earnings</Subtitle>
                                    <Metric>$3342.00</Metric>
                                </div>
                            </Flex>
                        </Card>
                        <Card decoration="top" decorationColor="orange" style={{ margin: "0 3px", paddingTop: '46px', paddingBottom: '46px' }}>
                            <Flex>
                                <Icon
                                    icon={CashIcon}
                                    color="orange"
                                    variant="light"
                                    size="xl"
                                />
                                <div>
                                    <Subtitle>Your Balance</Subtitle>
                                    <Metric>$1000</Metric>
                                </div>
                            </Flex>
                        </Card>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}