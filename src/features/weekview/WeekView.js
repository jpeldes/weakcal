import React from "react";
import moment from "moment";
import styles from "./WeekView.module.css";
import * as api from "../../api";


import { WeekList } from "./WeekList";
import { WeekNav } from "./WeekNav";

const todaysDate = moment().format("YYYY-MM-DD");

export function WeekView() {
  // Default value: todays date
  const [theDate, onChangeDate] = React.useState(todaysDate);

  let theMoment = moment(theDate);

  // on date change: sync holidays
  React.useEffect(() => {
    let weekStart = moment(theMoment).startOf('week');
    let weekEnd = moment(theMoment).endOf('week');

    api.syncMonthHolidays(weekStart);
    api.syncMonthHolidays(weekEnd);
  }, [theMoment]);

  return (
    <div className={styles.weekView}>
      <WeekList theMoment={theMoment} />
      <WeekNav theMoment={theMoment} onChangeDate={onChangeDate} />
    </div>
  );
}
