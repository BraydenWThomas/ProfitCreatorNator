// IMPORTS

// Chakra UI

// Tremor SO
import {
    Card,
    Metric, Title, Subtitle, Bold, Italic, Text,
    Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, BadgeDelta, Flex,
}
    from "@tremor/react";

// Material UI

// END OF IMPORTS

export default function ExchangeRates() {
    // Taken 4/6/2023, rip AUD :(
    const forexCurrencies = [
        { id: "1", name: "US Dollar", symbol: "AUD - USD", amount: 0.67139, change: -0.72 },
        { id: "2", name: "NZ Dollar", symbol: "AUD - NZD", amount: 1.0628, change: -0.69 },
        { id: "3", name: "Japanese Yen", symbol: "AUD - JPY", amount: 87.830, change: 1.2 },
        { id: "4", name: "Chinese Yuan", symbol: "AUD - CNY", amount: 4.6162, change: -0.78 },
        { id: "5", name: "British Pound", symbol: "AUD - GBP", amount: 0.53873, change: -0.4 },
        { id: "6", name: "Euro", symbol: "AUD - EUR", amount: 0.61572, change: -0.18 }
    ];
    return (

        <div>
            <div className="flex flex-row...">
                {forexCurrencies.map((currency) =>
                    <Card key={currency.id} style={{ margin: "0 8px" }}>
                        <Flex alignItems="start">
                            <div>
                                <Title> {currency.symbol} </Title>
                                <Text> {currency.name} </Text>
                                <Metric> {currency.amount} </Metric>
                            </div>
                            {
                                currency.change > 0 ?
                                    <BadgeDelta deltaType="moderateIncrease"> {currency.change} </BadgeDelta>
                                    :
                                    <BadgeDelta deltaType="moderateDecrease"> {currency.change} </BadgeDelta>
                            }
                        </Flex>
                    </Card>
                )}
            </div>
        </div>

    )
}
