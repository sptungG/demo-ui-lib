import React, { Fragment, memo, useCallback, useMemo, useRef, useState } from "react";
import moment, { Moment } from "moment";
import Popover from "../Popover";
import Calendar from "../Calendar";
import { useTheme } from "styled-components";
import DateField from "../DateField";
import MonthPrevNext from "./Toolbar/MonthPrevNext";
import Box from "../Box";
import SelectItem from "../SelectItem";
import { isNil } from "lodash";
import useDateRangePicker from "./useDateRangePicker";
import { Placement } from "@popperjs/core";
import { ActivatorDatePickerProps } from "./DatePicker";

interface DatePickerProps {
  value: Date | null | undefined;
  secondValue: Date | null | undefined;
  onChange: (date: Date | null, secondDate: Date | null, textTransfer: string) => void;
  id?: string;
  //The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December
  month?: number;
  //The year to show
  year?: number;
  minDate?: Date;
  maxDate?: Date;
  label?: string;
  autoFocus?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string | null;
  placeholder?: string;
  disabled?: boolean;
  placement?: Placement;
  highlight?: boolean;
  renderActivator?: (props: ActivatorDatePickerProps) => React.ReactNode;
}

const DatePickerShortRange = ({
  value,
  onChange,
  secondValue,
  children,
  label,
  required,
  error,
  autoFocus,
  helperText,
  placeholder,
  minDate,
  maxDate,
  disabled,
  placement = "bottom-end",
  renderActivator,
  highlight,
  ...props
}: React.PropsWithChildren<DatePickerProps>) => {
  const theme = useTheme();
  const [{ month, year }, setDateFocus] = useState({
    month: value ? moment(value).month() : props.month || moment().subtract(1, "month").month(),
    year: value ? moment(value).year() : props.year || moment().subtract(1, "month").year(),
  });
  const { nextMonth, nextYear } = useMemo(() => {
    const momentNextMonth = moment().month(month).year(year).add(1, "month");
    return {
      nextMonth: momentNextMonth.month(),
      nextYear: momentNextMonth.year(),
    };
  }, [month, year]);
  const format = "DD/MM/YYYY";
  const [open, setOpen] = useState(false);
  const activatorRef = useRef<any>(null);
  const handleDateRange = useDateRangePicker();

  const options = useMemo(
    () => [
      { label: theme.i18n("today"), id: "today" },
      { label: theme.i18n("yesterday"), id: "yesterday" },
      { label: theme.i18n("day_last_7"), id: "day_last_7" },
      { label: theme.i18n("last_month"), id: "last_month" },
      { label: theme.i18n("this_month"), id: "this_month" },
      { label: theme.i18n("custom"), id: "custom" },
    ],
    []
  );
  const [selected, setSelected] = useState(options[0]?.id);

  const handleClick = useCallback(() => {
    if (open || disabled) return;
    setDateFocus({
      month: value ? moment(value).month() : props.month || moment().subtract(1, "month").month(),
      year: value ? moment(value).year() : props.year || moment().subtract(1, "month").year(),
    });
    setOpen(true);
  }, [open, value, props.month, props.year, disabled]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClickDay = useCallback(
    (date: Moment) => {
      const { firstValue: _f, secondValue: _s } = handleDateRange(date, value, secondValue);
      onChange(_f, _s || null, "custom");
    },
    [value, secondValue, onChange, handleDateRange]
  );

  const handleClickOption = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      const dataVal = target.getAttribute("data-value");
      if (isNil(dataVal)) return;
      setSelected(dataVal);
      if (dataVal !== "custom") setOpen(false);
      switch (dataVal) {
        case "today":
          onChange(moment().startOf("day").toDate(), moment().endOf("day").toDate(), dataVal);
          break;
        case "yesterday":
          onChange(
            moment().startOf("day").subtract(1, "day").toDate(),
            moment().endOf("day").subtract(1, "day").toDate(),
            dataVal
          );
          break;
        case "day_last_7":
          onChange(
            moment().startOf("day").subtract(7, "days").toDate(),
            moment().endOf("day").subtract(1, "day").toDate(),
            dataVal
          );
          break;
        case "last_month":
          onChange(
            moment().subtract(1, "month").startOf("month").toDate(),
            moment().subtract(1, "month").endOf("month").toDate(),
            dataVal
          );
          break;
        case "this_month":
          onChange(moment().startOf("month").toDate(), moment().endOf("month").toDate(), dataVal);
          break;
      }
    },
    [onChange]
  );

  const Activator = useMemo(() => {
    return renderActivator?.({
      onClick: handleClick,
      open: open,
      reference: activatorRef,
    });
  }, [renderActivator, activatorRef, open, handleClick]);

  return (
    <Fragment>
      {Activator ? (
        Activator
      ) : (
        <DateField
          ref={activatorRef}
          onClick={handleClick}
          format={format}
          label={label}
          autoFocus={autoFocus}
          helperText={helperText}
          error={error}
          isDateRange={true}
          required={required}
          value={value}
          onChange={(date) => onChange(date || null, secondValue || null, "custom")}
          secondValue={secondValue}
          onChangeSecond={(date) => onChange(value || null, date || null, "custom")}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      <Popover open={open} onClose={handleClose} placement={placement} reference={activatorRef.current}>
        <Box display="flex">
          <Box px={1}>
            {options.map((option) => (
              <SelectItem
                key={option.id}
                value={option.id}
                selected={option.id === selected}
                onSelect={handleClickOption}
              >
                {option.label}
              </SelectItem>
            ))}
          </Box>
          {selected === "custom" && (
            <Fragment>
              <Box width={theme.pxToRem(312)}>
                <MonthPrevNext month={month} year={year} onChangeDateFocus={setDateFocus} hiddenNext />
                <Calendar
                  firstDate={value}
                  secondDate={secondValue}
                  month={month}
                  year={year}
                  onClickDay={handleClickDay}
                />
              </Box>
              <Box width={theme.pxToRem(312)}>
                <MonthPrevNext month={nextMonth} year={nextYear} onChangeDateFocus={setDateFocus} hiddenPrev />
                <Calendar
                  firstDate={value}
                  secondDate={secondValue}
                  month={nextMonth}
                  year={nextYear}
                  onClickDay={handleClickDay}
                  minDate={minDate}
                  maxDate={maxDate}
                />
              </Box>
            </Fragment>
          )}
        </Box>
      </Popover>
    </Fragment>
  );
};

DatePickerShortRange.displayName = "DatePickerShortRange";
export default memo(DatePickerShortRange);
