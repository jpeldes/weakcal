import React from "react";
import moment from "moment";
import styles from "./WeekView.module.css";
import { selectAllHolidays } from "../holidays/holidaysSlice";
import { useSelector } from "react-redux";
import * as api from "../../api";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";

import CalendarTodayIcon from '@material-ui/icons/Today';
import ArrowRightIcon from '@material-ui/icons/ArrowForward';
import ArrowLeftIcon from '@material-ui/icons/ArrowBack';

function DayEventsItem({ name, type }) {
  return (
    <div className={[styles.dayEventsItem, styles[type]].join(" ")}>{name}</div>
  );
}

function DayView({ holidayId }) {
  let m = moment(holidayId);

  const holidays = useSelector(selectAllHolidays)[holidayId] || [];

  return (
    <Card className={styles.dayView}>
      <CardMedia title={m.format("ddd")}>
        <Box textAlign="center">{m.format("ddd")}</Box>
      </CardMedia>
      <CardContent className={styles.dayTitle}>
        <Box textAlign="center">{m.format("DD.MM.YYYY")}</Box>
      </CardContent>
      <CardActions className={styles.dayEvents}>
        {holidays.map((holiday, idx) => (
          <DayEventsItem key={idx} {...holiday} />
        ))}
      </CardActions>
    </Card>
  );
}

const todaysDate = moment().format("YYYY-MM-DD");

export function WeekView() {
  // Default value: todays date
  const [theDate, onChangeDate] = React.useState(todaysDate);

  let m = moment(theDate);

  // on date change: sync holidays
  React.useEffect(() => {
    const startDate = m.weekday(0).format("YYYY-MM-DD");
    const endDate = m.weekday(6).format("YYYY-MM-DD");
    api.syncHolidays(startDate, endDate).then(console.log);
  }, [m]);

  // Generate 7 days of that given week
  let thisWeeksIds = [];
  for (var dayNr = 0; dayNr <= 6; dayNr++) {
    thisWeeksIds.push(m.weekday(dayNr).format("YYYY-MM-DD"));
  }

  return (
    <div className={styles.weekView}>
      <div className={styles.weekList}>
        {thisWeeksIds.map(holidayId => (
          <DayView key={holidayId} holidayId={holidayId} />
        ))}
      </div>

      <BottomNavigation
        value={m}
        onChange={(event, newValue) => onChangeDate(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Last week" value={m.subtract(7, "days").format("YYYY-MM-DD")} icon={<ArrowLeftIcon />} />
        <BottomNavigationAction label="Today" value={moment().format("YYYY-MM-DD")} icon={<CalendarTodayIcon />} />
        <BottomNavigationAction label="Next week" value={m.add(7, "days").format("YYYY-MM-DD")} icon={<ArrowRightIcon />} />
      </BottomNavigation>
    </div>
  );
}
