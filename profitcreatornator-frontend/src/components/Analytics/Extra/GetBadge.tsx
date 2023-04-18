import { BadgeDelta, Badge } from "@tremor/react"

interface ProfitLoss {
  status: string,
  amount: string
}

export default function GetBadge({ status, amount }: ProfitLoss) {
  if (status === "+") {
    return (
      <BadgeDelta
        deltaType="increase"
        isIncreasePositive={true}
        size="xs">
        {amount}
      </BadgeDelta>
    )
  } else if (status === "-") {
    return (
      <BadgeDelta
        deltaType="decrease"
        isIncreasePositive={false}
        size="xs">
        {amount}
      </BadgeDelta>
    )
  } else {
    return (
      <Badge
        color={status.toUpperCase() == "PUT" ? "purple" : "orange"}
        size="xs">
        {amount}
      </Badge>
    )
  }
}