import React from "react";
import { WeekView } from "./features/weekview/WeekView";
import { Container } from "@material-ui/core";
import TopNavBar from "./TopNavBar";

function App() {
  return (
    <>
      <TopNavBar />
      <Container>
        <WeekView />
      </Container>
    </>
  );
}

export default App;
