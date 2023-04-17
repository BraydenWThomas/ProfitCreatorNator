import { Card, List, ListItem, Title } from "@tremor/react";
import { FunctionComponent } from "react";

interface Props {
    marketCap: string
    previousClose: string
    open: string
    volume: string
    dayRange: string
}

const StockInfoList: FunctionComponent<Props> = ({
    marketCap,
    previousClose,
    open,
    volume,
    dayRange
}) => {
    return(
        <Card>
            <Title>Stock Information</Title>
            <List>
                <ListItem>
                    <span>Market Cap</span>
                    <span>{marketCap}</span>
                </ListItem>
                <ListItem>
                    <span>Previous Close</span>
                    <span>{previousClose}</span>
                </ListItem>
                <ListItem>
                    <span>Open</span>
                    <span>{open}</span>
                </ListItem>
                <ListItem>
                    <span>Day Range</span>
                    <span>{dayRange}</span>
                </ListItem>
                <ListItem>
                    <span>Volume</span>
                    <span>{volume}</span>
                </ListItem>
            </List>
        </Card>
    );
}

export default StockInfoList;