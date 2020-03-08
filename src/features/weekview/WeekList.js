import React from "react";
import moment from "moment";
import styles from "./WeekView.module.css";
import { DayView } from "./DayView";

export function WeekList({ theMoment }) {
  // Generate 7 days of that given week
  let thisWeeksIds = [];
  for (var dayNr = 0; dayNr <= 6; dayNr++) {
    thisWeeksIds.push(
      moment(theMoment)
        .weekday(dayNr)
        .format("YYYY-MM-DD")
    );
  }
  return (
    <div className={styles.weekList}>
      {thisWeeksIds.map(holidayId => (
        <DayView key={holidayId} holidayId={holidayId} />
      ))}
    </div>
  );
}
