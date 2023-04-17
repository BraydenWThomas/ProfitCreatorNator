import AnalyticsOptionTable from "./AnalyticsOptionTable";

interface DisplayState {
  state: string
}

export default function OptionStates({ state }: DisplayState) {
  if (state === "exercised") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable state={state} />
      </div>
    )
  }

  else if (state === "waiting") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable state={state} />
      </div>
    )
  }
  
  else if (state === "pending") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <AnalyticsOptionTable state={state} />
      </div>
    )
  }

  else {
    return (
      <> </>
    )
  }
}