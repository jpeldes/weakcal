import React from "react";
import moment from "moment";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@material-ui/core";

import CalendarTodayIcon from "@material-ui/icons/Today";
import ArrowRightIcon from "@material-ui/icons/ArrowForward";
import ArrowLeftIcon from "@material-ui/icons/ArrowBack";


export function WeekNav({ theMoment, onChangeDate }) {
  return (
    <Paper>
      <BottomNavigation
        value={theMoment}
        onChange={(event, newValue) => onChangeDate(newValue)}
        showLabels
      >
        <BottomNavigationAction
          label="Last week"
          value={moment(theMoment)
            .subtract(7, "days")
            .format("YYYY-MM-DD")}
          icon={<ArrowLeftIcon />}
        />
        <BottomNavigationAction
          label="Today"
          value={moment().format("YYYY-MM-DD")}
          icon={<CalendarTodayIcon />}
        />
        <BottomNavigationAction
          label="Next week"
          value={moment(theMoment)
            .add(7, "days")
            .format("YYYY-MM-DD")}
          icon={<ArrowRightIcon color="inherit" />}
        />
      </BottomNavigation>
    </Paper>
  );
}
