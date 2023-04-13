// Components
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Divider } from "@mui/material";
import OptionTable from "@/components/OptionTable";
import DisplayState from "@/components/Analytics/DisplayState";

export default function analytics() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div className="content" style={{ float: 'left', width: '100%' }}>
        <Header title="Analytics" />

        <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />

        <DisplayState />
      </div>
    </div>
  )
}