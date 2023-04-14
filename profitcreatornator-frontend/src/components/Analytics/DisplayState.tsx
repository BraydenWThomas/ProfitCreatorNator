// React
import { SetStateAction, useState } from "react";

// Material UI
import { Tab, Tabs } from '@mui/material';
import OptionStates from "./OptionStates";

export default function DisplayState() {
  const [displayState, setDisplayState] = useState("current");

  const changeDisplay = (event: any, newDisplay: SetStateAction<string>) => {
    setDisplayState(newDisplay);
  }

  return (
    <div>
      <div className="DisplayStates">
        <Tabs
          value={displayState}
          onChange={changeDisplay}
        >
          <Tab value="past" label="Past Options" />
          <Tab value="current" label="Current Options" />
          <Tab value="pending" label="Pending Options" />
        </Tabs>
      </div>

      <div className="OptionStates">
        {displayState === "past" 
          ? <OptionStates state={displayState} />
          : (displayState === "current"
            ? <OptionStates state={displayState} />
            : (displayState === "pending"
              && <OptionStates state={displayState} />
        ))}
      </div>
    </div>
  )
}