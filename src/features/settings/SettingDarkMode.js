import React from "react";
import {
  DialogTitle,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Switch
} from "@material-ui/core";

const SettingDarkMode = ({ isDarkMode, setDarkMode }) => {
  return (
    <>
      <DialogTitle>Dark mode</DialogTitle>
      <DialogContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={event => setDarkMode(event.target.checked)}
              />
            }
            label={isDarkMode ? "Dark mode" : "Light mode"}
          />
        </FormGroup>
      </DialogContent>
    </>
  );
};

export default SettingDarkMode;
