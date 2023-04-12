import { Badge, BadgeDelta, Card, Metric, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";

export default function RecentTransactions(){

    return(
        <div className="recent-transactions">
            <Card>
                <Metric>Recent Transactions</Metric>
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
                            <TableCell>CBA</TableCell>
                            <TableCell>Commonwealth Bank of Australia</TableCell>
                            <TableCell>99.27</TableCell>
                            <TableCell><BadgeDelta deltaType="moderateDecrease">0.49</BadgeDelta></TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>99.27</TableCell>
                            <TableCell>992.70</TableCell>
                            <TableCell><Badge color="violet">Put</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>VAS</TableCell>
                            <TableCell>Vanguard Australian Shares Index ETF</TableCell>
                            <TableCell>90.88</TableCell>
                            <TableCell><BadgeDelta deltaType="moderateIncrease">1.15</BadgeDelta></TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>90.88</TableCell>
                            <TableCell>908.80</TableCell>
                            <TableCell><Badge color="amber">Call</Badge></TableCell>
                        </TableRow>
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