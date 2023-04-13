// Material UI
import { Typography } from "@mui/material";

type HeaderProps = {
  title: string
}
export default function Header({ title }: HeaderProps) {
  return (
    <div className="header" style={{ display: "flex" }}>
      <Typography
        component="h1"
        variant="h3"
        color="#293845"
        mt={2}
        ml={2}
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
    </div>
  )
}