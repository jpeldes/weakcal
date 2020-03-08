import React from "react";
import { Paper } from "@material-ui/core";
import SettingFirstDayOfWeek from "./SettingFirstDayOfWeek";
import SettingDarkMode from "./SettingDarkMode";

export const SettingsModal = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [firstDay, setFirstDay] = React.useState(0);

  return (
    <Paper>
      <SettingFirstDayOfWeek firstDay={firstDay} setFirstDay={setFirstDay} />
      <SettingDarkMode isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </Paper>
  );
};
