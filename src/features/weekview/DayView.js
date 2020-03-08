import React from "react";
import moment from "moment";
import styles from "./WeekView.module.css";
import { selectAllHolidays } from "../holidays/holidaysSlice";
import { useSelector } from "react-redux";
import { Box, Card, CardMedia, CardContent } from "@material-ui/core";

function DayEventsItem({ name, type }) {
  return (
    <div className={[styles.dayEventsItem, styles[type]].join(" ")}>{name}</div>
  );
}

export function DayView({ holidayId }) {
  let m = moment(holidayId);
  const holidays = useSelector(selectAllHolidays)[holidayId] || [];
  return (
    <Card className={styles.dayView}>
      <CardMedia>
        <Box textAlign="center">{m.format("ddd")}</Box>
      </CardMedia>
      <CardContent className={styles.dayTitle}>
        <Box textAlign="center">{m.format("DD.MM.YYYY")}</Box>
      </CardContent>
      <Box className={styles.dayEvents}>
        {holidays.map((holiday, idx) => (
          <DayEventsItem key={idx} {...holiday} />
        ))}
      </Box>
    </Card>
  );
}
