import React from "react";
import { WeekView } from "./features/weekview/WeekView";
import { Container } from "@material-ui/core";
import TopNavBar from "./TopNavBar";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./theme";

import { useSelector } from "react-redux";
import {
  selectDarkMode,
  selectFirstDayOfWeek
} from "./features/settings/settingsSlice";

import * as utils from "./utils";

function useMomentJsUpdater() {
  const firstDayOfWeek = useSelector(selectFirstDayOfWeek);

  React.useEffect(() => {
    utils.updateMomentJsLocale({ dow: firstDayOfWeek });
  }, [firstDayOfWeek]);
}

function App() {
  const isDarkMode = useSelector(selectDarkMode);
  const theme = getTheme(isDarkMode);

  useMomentJsUpdater();

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
