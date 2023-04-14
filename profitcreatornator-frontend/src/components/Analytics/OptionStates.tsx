import AnalyticsOptionTable from "./AnalyticsOptionTable";

interface DisplayState {
  state: string
}

export default function OptionStates({ state }: DisplayState) {
  if (state === "past") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <h1> Test Past </h1>
        <AnalyticsOptionTable state={state} />
      </div>
    )
  }

  else if (state === "current") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <h1> Test Current </h1>
        <AnalyticsOptionTable state={state} />
      </div>
    )
  }
  
  else if (state === "pending") {
    return (
      <div className="OptionsTabTable" style={{ marginTop: '2%' }}>
        <h1> Test Pending </h1>
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