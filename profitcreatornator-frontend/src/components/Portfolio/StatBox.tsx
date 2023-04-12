import { Card, Flex, Icon, Metric, Text } from "@tremor/react";
import React, { FunctionComponent } from "react";

interface Props {
    icon: React.ElementType
    title: string
    total: string
    color: any
}

const StatBox: FunctionComponent<Props> = ({
    icon,
    title,
    total,
    color
}) => {
    return (
        <Card className="mt-2 max-w-xs" 
        decoration="top" 
        decorationColor={color}>
            <Flex
            justifyContent="evenly">
                <div>
                    {icon && <Icon icon={icon} 
                    color={color}
                    variant="solid"
                    size="lg"
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