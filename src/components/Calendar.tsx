import React, { memo, MouseEvent, useCallback, useMemo, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import { getDaysInAMonth } from "./DatePicker/DateUtils";
import moment, { Moment } from "moment";
import { v4 as uuidv4 } from "uuid";

interface CalendarProps {
  month: number;
  year: number;
  firstDate: Date | null | undefined;
  secondDate?: Date | null | undefined;
  onClickDay: (value: Moment) => void;
  minDate?: Date | null;
  maxDate?: Date | null;
  isDateRange?: boolean;
}

const Calendar = memo(
  ({ month, year, firstDate, secondDate, onClickDay, minDate, maxDate, isDateRange }: CalendarProps) => {
    const daysInAMonth = useMemo(() => getDaysInAMonth(year, month), [year, month]);
    const theme = useTheme();
    const weekdays = useMemo(() => ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], []);
    const uid = useMemo(() => uuidv4(), []);

    const getDay = useCallback(
      (text: string | null | undefined) => {
        return moment(text, "DD-MM-YYYY");
      },
      [daysInAMonth]
    );

    const [dayFocus, setDayFocus] = useState<Moment | null>(null);
    const today = moment().format("DD-MM-YYYY");

    const handleMouseEnter = useCallback((e: MouseEvent<any>) => {
      const target: any = e.target || e.currentTarget;
      setDayFocus(getDay(target.getAttribute("data-value")));
    }, []);

    const handleMouseLeave = useCallback(() => {
      setDayFocus(null);
    }, []);

    const isFocused = useCallback(
      (currentDate: Moment) => {
        if (firstDate && !secondDate && dayFocus?.isAfter(firstDate, "day")) {
          return currentDate.isAfter(firstDate, "day") && currentDate.isBefore(dayFocus, "day");
        }
      },
      [dayFocus, firstDate, secondDate]
    );

    const handleClickDay = useCallback(
      (e: MouseEvent<any>) => {
        const target: any = e.target || e.currentTarget;
        onClickDay(getDay(target.getAttribute("data-value")));
      },
      [daysInAMonth, onClickDay]
    );

    return (
      <Container onMouseLeave={handleMouseLeave}>
        <StyledCalendar>
          <thead>
            <tr>
              {weekdays.map((weekday) => (
                <Weekday key={`Weekday-${weekday}`}>{theme.i18n(weekday)}</Weekday>
              ))}
            </tr>
          </thead>
          <tbody id={uid}>
            {daysInAMonth.map((week) => (
              <tr key={`Week-${week[0].format("DD/MM/YYYY")}`}>
                {week.map((day) => (
                  <DayCell
                    key={`Day-${day.format("DD/MM/YYYY")}`}
                    isFirst={!!firstDate && day.isSame(firstDate, "day")}
                    isLast={
                      (!!secondDate && day.isSame(secondDate, "day")) || (!!dayFocus && day.isSame(dayFocus, "day"))
                    }
                    inside={
                      !!firstDate &&
                      (!secondDate
                        ? !!dayFocus && day.isBetween(firstDate, dayFocus, "day", "[]")
                        : day.isBetween(firstDate, secondDate, "day", "[]"))
                    }
                  >
                    <Day
                      disabled={!!(minDate && day.isBefore(minDate, "day")) || !!(maxDate && day.isAfter(maxDate))}
                      active={
                        (!!firstDate && day.isSame(firstDate, "day")) || (!!secondDate && day.isSame(secondDate, "day"))
                      }
                      onClick={handleClickDay}
                      secondary={day.month() !== month || day.year() !== year}
                      data-value={day.format("DD-MM-YYYY")}
                      data-type="day"
                      data-focused={isFocused(day) ? "true" : undefined}
                      data-today={day.format("DD-MM-YYYY") === today ? "true" : undefined}
                      onMouseEnter={isDateRange ? handleMouseEnter : undefined}
                    >
                      {day.format("D")}
                    </Day>
                  </DayCell>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledCalendar>
      </Container>
    );
  }
);

Calendar.displayName = "Calendar";
export default Calendar;

const Container = styled.div`
  min-height: ${({ theme }) => theme.pxToRem(262)};
`;

const StyledCalendar = styled.table`
  width: 100%;
  border-spacing: ${({ theme }) => `0 ${theme.pxToRem(8)}`};
`;

const Weekday = styled.th`
  ${({ theme }) => theme.typography.subtitle1}
  text-align: center;
  height: ${({ theme }) => theme.pxToRem(28)};
  padding: 0;
`;

const DayCell = styled.td<{
  inside?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}>`
  position: relative;
  text-align: center;
  padding: 0;

  ${({ inside }) =>
    inside
      ? css`
          background: ${({ theme }) => theme.palette.primary["5"]};
        `
      : null}

  ${({ isLast, inside }) =>
    isLast && inside
      ? css`
          background: linear-gradient(90deg, ${({ theme }) => `${theme.palette.primary["5"]} 50%`}, transparent 50%);
        `
      : null}

  ${({ isFirst, inside }) =>
    isFirst && inside
      ? css`
          background: linear-gradient(90deg, transparent 50%, ${({ theme }) => `${theme.palette.primary["5"]} 50%`});
        `
      : null}
`;

const Day = styled.button<{
  active?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}>`
  ${({ theme }) => theme.typography.body1}
  width: ${({ theme }) => theme.pxToRem(28)};
  height: ${({ theme }) => theme.pxToRem(28)};
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: ${({ theme }) => theme.pxToRem(1)} ${({ theme }) => theme.pxToRem(4)};

  &:focus-visible {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.palette.primary["80"]};
  }

  &[data-focused="true"] {
    background: ${({ theme }) => theme.palette.primary["5"]};
  }

  &[data-today="true"] {
    border: 1px solid ${({ theme }) => theme.palette.stroke};
  }

  ${({ active, disabled, secondary }) => {
    if (active) {
      return css`
        color: #fff;
        background-color: ${({ theme }) => theme.palette.primary.main};
      `;
    }
    if (disabled) {
      return css`
        pointer-events: none;
        color: ${({ theme }) => theme.palette.ink["60"]};
        background: ${({ theme }) => theme.palette.ink["20"]};
      `;
    }
    return secondary
      ? css`
          color: ${({ theme }) => theme.palette.ink["40"]};
        `
      : null;
  }}
`;
