import React from "react";
import { WeekView } from "./features/weekview/WeekView";
import { Container, Paper, Box, Typography } from "@material-ui/core";

function Hero() {
  return (
    <Paper>
      <Box textAlign="center" mb={3} py={3}>
        <Typography variant="h2">WeakCal</Typography>
        <Typography variant="h5">Your weekly calendar</Typography>
      </Box>
    </Paper>
  );
}

function App() {
  return (
    <>
    <Hero />
      <Container>
      <WeekView />
    </Container>
    </>
  );
}

export default App;
