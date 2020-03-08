import React from "react";
import {
  DialogTitle,
  DialogContent,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import moment from "moment";

const SettingFirstDayOfWeek = ({ firstDay, setFirstDay }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const options = [0, 1, 2, 3, 4, 5, 6];

  const buttonTitle = moment()
    .weekday(firstDay)
    .format("dddd");

  return (
    <>
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
            <MenuItem
              key={option}
              onClick={() => {
                setFirstDay(option);
                handleClose();
              }}
            >
              {moment()
                .weekday(option)
                .format("dddd")}
            </MenuItem>
          ))}
        </Menu>
      </DialogContent>
    </>
  );
};
export default SettingFirstDayOfWeek;
