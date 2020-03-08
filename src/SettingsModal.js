import React from "react";
import {
  Paper,
  DialogTitle,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import moment from "moment";

export const SettingsModal = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [firstDay, setFirstDay] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const options = [0, 1, 2, 3, 4, 5, 6];

  const buttonTitle = moment()
    .weekday(firstDay)
    .format("dddd");

  return (
    <Paper>
      <DialogTitle>First day of the week</DialogTitle>
      <DialogContent>
        <Button
          color="secondary"
          variant="contained"
          aria-controls="fdow-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {buttonTitle}
        </Button>
        <Menu
          id="fdow-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map(option => (
            <MenuItem key={option} onClick={() => { setFirstDay(option); handleClose(); }}>
              {moment()
                .weekday(option)
                .format("dddd")}
            </MenuItem>
          ))}
        </Menu>
      </DialogContent>
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
    </Paper>
  );
};
