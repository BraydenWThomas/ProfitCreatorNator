import { Badge, BadgeDelta, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";

interface OptionsProperties {
    id: number;
    expirationDate: Date;
    premium: number;
    purchaseDate: Date;
    quantity: number;
    status: string;
    strikePrice: number;
    style: string;
    type: string;
    barrierOptionId?: number;
}

export default function RecentTransactions(){

    return(
        <div className="recent-transactions">
            <Card>
                <Title>Recent Transactions</Title>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Code</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Avg Price ($)</TableHeaderCell>
                            <TableHeaderCell>Profit/Loss (%)</TableHeaderCell>
                            <TableHeaderCell>Units</TableHeaderCell>
                            <TableHeaderCell>Price ($)</TableHeaderCell>
                            <TableHeaderCell>Value ($)</TableHeaderCell>
                            <TableHeaderCell>Type</TableHeaderCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>NAB</TableCell>
                            <TableCell>National Australia Bank Ltd.</TableCell>
                            <TableCell>28.10</TableCell>
                            <TableCell><BadgeDelta deltaType="moderateIncrease">0.15</BadgeDelta></TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>28.10</TableCell>
                            <TableCell>281.00</TableCell>
                            <TableCell><Badge color="violet">Put</Badge></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}