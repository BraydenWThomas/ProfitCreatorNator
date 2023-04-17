import { BadgeDelta, Card, DeltaBar, DeltaType, Flex, Metric, Text } from "@tremor/react";
import React from "react";
import { FunctionComponent } from "react";

interface Props {
    symbol: string
    deltaType: DeltaType
    isIncreasePositive: boolean
    stockPrice: string
}


const StockPriceCard: FunctionComponent<Props>= ({
    symbol,
    deltaType,
    isIncreasePositive,
    stockPrice
}) => {
    return(
       <Card>
        <Flex justifyContent="between" alignItems="center">
            <Text>{symbol}</Text>
            <BadgeDelta
            deltaType={deltaType}
            isIncreasePositive={isIncreasePositive}
            size="sm">
                +9.42
            </BadgeDelta>
        </Flex>
        <Metric>{stockPrice}</Metric>
       </Card>
    );
} 

export default StockPriceCard;