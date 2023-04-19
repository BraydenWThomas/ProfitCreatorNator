// React
import { SetStateAction, useState } from "react";

// Material UI
import { Tab, Tabs } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, purple } from "@mui/material/colors";

// Components
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

  // Show detailed
  const [displayHidden, setDisplayHidden] = useState(false);
  const [highlightedRow, setHighlightedRow] = useState("");

  // Tab filter
  const [displayState, setDisplayState] = useState("waiting");

  // Reset states on display change
  const changeDisplay = (event: any, newDisplay: SetStateAction<string>) => {
    setDisplayState(newDisplay);
    setRowsPerPage(5);
    setDisplayHidden(false);
  }

  // Override MUI Tab theme
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[400]
      },
      secondary: {
        main: purple[900]
      }
    }
  });

  return (
    <div>
      <div className="DisplayStates">
        <ThemeProvider theme={theme}>
        <Tabs
          value={displayState}
          onChange={changeDisplay}
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab value="exercised" label="Past Options" />
          <Tab value="waiting" label="Current Options" />
          <Tab value="pending" label="Pending Options" />
        </Tabs>
        </ThemeProvider>
      </div>

      <div className="OptionStates">
        {displayState === "exercised"
          ? <OptionStates
              state={displayState}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              displayHidden={displayHidden}
              setDisplayHidden={setDisplayHidden}  />
          : (displayState === "waiting"
            ? <OptionStates
                state={displayState}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                displayHidden={displayHidden}
                setDisplayHidden={setDisplayHidden} />
            : (displayState === "pending"
              && <OptionStates
                    state={displayState}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    displayHidden={displayHidden}
                    setDisplayHidden={setDisplayHidden} />
            ))}
      </div>
    </div>
  )
}