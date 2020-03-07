import React from "react";
import moment from "moment";
import styles from "./WeekView.module.css";
import { selectAllHolidays } from "../holidays/holidaysSlice";
import { useSelector } from "react-redux";
import * as api from "../../api";


function DayEvent({ name, type }) {
    return (
        <div className={[styles.dayEventsItem, styles[type]].join(' ')}>{ name }</div>
    )
}

function DayView({ holidayId }) {
  let m = moment(holidayId);

  const holidays = useSelector(selectAllHolidays)[holidayId] || [];

  return (
    <div className={styles.dayView}>
      <div className={styles.dayTitle}>
        <div>{m.format("ddd")}</div>
        <div>{m.format("DD.MM.YYYY")}</div>
      </div>
      <div className={styles.dayEvents}>
        {holidays.map((holiday, idx) => <DayEvent key={idx} {...holiday} />)}
      </div>
    </div>
  );
}

const todaysDate = moment().format('YYYY-MM-DD');

export function WeekView() {
  // Default value: todays date
  const [theDate, onChangeDate] = React.useState(todaysDate);

  let m = moment(theDate);

  // on date change: sync holidays
  React.useEffect(() => {
    const startDate = m.weekday(0).format('YYYY-MM-DD');
    const endDate = m.weekday(6).format('YYYY-MM-DD');
    api.syncHolidays(startDate, endDate).then(console.log);
  }, [m]);


  const onClickNextWeek = () => onChangeDate(m.add(7, 'days'));
  const onClickPrevWeek = () => onChangeDate(m.subtract(7, 'days'));


  // Generate 7 days of that given week
  let thisWeeksIds = [];
  for (var dayNr = 0; dayNr <= 6; dayNr++) {
    thisWeeksIds.push(m.weekday(dayNr).format("YYYY-MM-DD"));
  }

  return (
    <div className={styles.weekView}>
      <div className={styles.weekNav}>
        <button className={styles.weekNavBtn} onClick={onClickPrevWeek}>{"<<"}</button>
        <button className={styles.weekNavBtn} onClick={onClickNextWeek}>{">>"}</button>
      </div>
      <div className={styles.weekList}>
        {thisWeeksIds.map(holidayId => (
          <DayView key={holidayId} holidayId={holidayId} />
        ))}
      </div>
    </div>
  );
}
