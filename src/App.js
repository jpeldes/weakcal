import React from "react";
import { WeekView } from "./features/weekview/WeekView";
import { Container } from "@material-ui/core";
import TopNavBar from "./TopNavBar";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./theme";

import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/settings/settingsSlice";

function App() {
  const isDarkMode = useSelector(selectDarkMode);
  const theme = getTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar />
      <Container>
        <WeekView />
      </Container>
    </ThemeProvider>
  );
}

export default App;
