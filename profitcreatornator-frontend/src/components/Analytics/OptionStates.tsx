import { SetStateAction, useState } from "react";
import AnalyticsOptionTable from "./AnalyticsOptionTable";

export default function OptionStates({ state, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }: any) {
  if (state === "exercised") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable
          state={state}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage} />
      </div>
    )
  }

  else if (state === "waiting") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable
          state={state}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage} />
      </div>
    )
  }

  else if (state === "pending") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable
          state={state}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage} />
      </div>
    )
  }

  else {
    return (
      <> </>
    )
  }
}