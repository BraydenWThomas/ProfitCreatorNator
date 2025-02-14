import { Card, Flex, Icon, Metric, Text } from "@tremor/react";
import React, { FunctionComponent } from "react";

interface Props {
    icon: React.ElementType
    title: string
    total: any
    color: any
}

const StatBox: FunctionComponent<Props> = ({
    icon,
    title,
    total,
    color
}) => {
    return (
        <Card className="mx-auto mb-4" 
        decoration="top" 
        decorationColor={color}>
            <Flex
            justifyContent="evenly">
                <div>
                    {icon && <Icon icon={icon}
                    color={color}
                    variant="light"
                    size="xl"
                    />}
                </div>
                <div>
                    <Text>{title}</Text>
                    <Metric>{total}</Metric>
                </div>
            </Flex>
        </Card>
    );
}

export default StatBox;