import React from "react";
import { Paper } from "@material-ui/core";
import SettingFirstDayOfWeek from "./SettingFirstDayOfWeek";
import SettingDarkMode from "./SettingDarkMode";

export const SettingsModal = () => {
  return (
    <Paper>
      <SettingFirstDayOfWeek />
      <SettingDarkMode />
    </Paper>
  );
};
