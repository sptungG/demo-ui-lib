import * as Moment from "moment";
import { extendMoment } from "moment-range";

export const getDaysInAMonth = (year: number, month: number) => {
  const moment = extendMoment(Moment);
  const startDate = moment([year, month]);
  const firstDay = moment(startDate).startOf("month");
  const endDay = moment(startDate).endOf("month");
  const monthRange = moment.range(firstDay, endDay);
  const weeks: Moment.Moment[] = [];
  const days = Array.from(monthRange.by("day"));
  days.forEach((it) => {
    if (!weeks.some((e) => e.format("w YYY") === it.format("w YYY"))) {
      weeks.push(it);
    }
  });
  if (weeks.length < 6) {
    const lastElement = weeks[weeks.length - 1];
    const firstMoreElement = lastElement.endOf("week").clone().add(1, "day");
    weeks.push(firstMoreElement);
  }
  const calendar: Moment.Moment[][] = [];
  weeks.forEach((m) => {
    const firstWeekDay = m.startOf("week").clone();
    const lastWeekDay = m.endOf("week").clone();
    const weekRange = moment.range(firstWeekDay, lastWeekDay);
    calendar.push(Array.from(weekRange.by("day")));
  });

  return calendar;
};
