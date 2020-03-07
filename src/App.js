import React from "react";
import { WeekView } from "./features/weekview/WeekView";

function App() {
  return (
    <div className="App">
      <div>
        <h2>WeakCal</h2>
        <p>Your weekly calendar</p>
        <WeekView />
      </div>
    </div>
  );
}

export default App;
