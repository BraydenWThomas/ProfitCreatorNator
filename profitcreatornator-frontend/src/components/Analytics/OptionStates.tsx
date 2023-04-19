// React
import { SetStateAction, useState } from "react";

// Components
import AnalyticsOptionTable from "./AnalyticsOptionTable";

export default function OptionStates({ state, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, displayHidden, setDisplayHidden}: any) {
  if (state === "exercised") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable
          state={state}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          displayHidden={displayHidden}
          setDisplayHidden={setDisplayHidden} />
      </div>
    )
  }

  else if (state === "waiting_exercise") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable
          state={state}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          displayHidden={displayHidden}
          setDisplayHidden={setDisplayHidden} />
      </div>
    )
  }

  else if (state === "waiting_taker") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable
          state={state}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          displayHidden={displayHidden}
          setDisplayHidden={setDisplayHidden} />
      </div>
    )
  }

  else {
    return (
      <> </>
    )
  }
}