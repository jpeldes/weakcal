import React from "react";
import {
  DialogTitle,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, setDarkMode } from "./settingsSlice";

const SettingDarkMode = () => {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <>
      <DialogTitle>Dark mode</DialogTitle>
      <DialogContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={() =>
                  dispatch(setDarkMode({ isDarkMode: !isDarkMode }))
                }
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
