// React
import { SetStateAction, useState } from "react";

// Material UI
import { Tab, Tabs } from '@mui/material';
import OptionStates from "./OptionStates";

export default function DisplayState() {
   // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Tab filter
  const [displayState, setDisplayState] = useState("waiting");

  const changeDisplay = (event: any, newDisplay: SetStateAction<string>) => {
    setDisplayState(newDisplay);
    setRowsPerPage(5);
  }

  return (
    <div>
      <div className="DisplayStates">
        <Tabs
          value={displayState}
          onChange={changeDisplay}
        >
          <Tab value="exercised" label="Past Options" />
          <Tab value="waiting" label="Current Options" />
          <Tab value="pending" label="Pending Options" />
        </Tabs>
      </div>

      <div className="OptionStates">
        {displayState === "exercised"
          ? <OptionStates
              state={displayState}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage} />
          : (displayState === "waiting"
            ? <OptionStates
                state={displayState}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage} />
            : (displayState === "pending"
              && <OptionStates
                  state={displayState}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage} />
            ))}
      </div>
    </div>
  )
}