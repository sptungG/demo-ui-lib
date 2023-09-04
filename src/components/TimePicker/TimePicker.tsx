import React, { Fragment, memo, useCallback, useMemo, useRef, useState } from "react";
import moment, { Moment } from "moment";
import Popover from "../Popover";
import { useTheme } from "styled-components";
import Calendar from "../Calendar";
import Toolbar from "./Toolbar";
import MonthPrevNext from "../DatePicker/Toolbar/MonthPrevNext";
import TimeRangeSelect, { TimeRangeSelectRef } from "./Toolbar/TimeRangeSelect";
import TimeSelect, { TimeSelectRef } from "./Toolbar/TimeSelect";
import DateField from "../DateField";
import Box from "../Box";
import { Placement } from "@popperjs/core";
import { ButtonSelectProps } from "../ButtonSelect";
import { ActivatorDropdownProps } from "../Dropdown";

export interface TimePickerProps {
  value: Date | null | undefined;
  onChange: (date: Date | null) => void;
  secondValue?: Date | null | undefined;
  onChangeSecond?: (date: Date | null) => void;
  id?: string;
  //The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December
  month?: number;
  //The year to show
  year?: number;
  minDate?: Date;
  maxDate?: Date;
  isTimeSameDay?: boolean;
  label?: string;
  autoFocus?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string | null;
  placeholder?: string;
  disabled?: boolean;
  periodTime?: 15 | 30;
  placement?: Placement;
  renderActivator?: (props: ActivatorDropdownProps) => React.ReactNode;
  highlight?: boolean;
  inline?: boolean;
  buttonProps?: Partial<ButtonSelectProps>;
  dateAppendOnFirstOpen?: Date | null;
}

const TimePicker = ({
  value,
  onChange,
  onChangeSecond,
  isTimeSameDay,
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
  periodTime = 30,
  placement = "bottom-end",
  renderActivator,
  highlight,
  inline,
  buttonProps,
  dateAppendOnFirstOpen,
  ...props
}: React.PropsWithChildren<TimePickerProps>) => {
  const theme = useTheme();
  const [{ month, year }, setDateFocus] = useState({
    month: value ? moment(value).month() : props.month || moment().month(),
    year: value ? moment(value).year() : props.year || moment().year(),
  });
  const format = "DD/MM/YYYY HH:mm";
  const [open, setOpen] = useState(false);
  const activatorRef = useRef<any>(null);
  const timeRangeSelectRef = useRef<TimeRangeSelectRef | null>(null);
  const timeSelectRef = useRef<TimeSelectRef | null>(null);
  const refFirstOpen = useRef(false);

  const handleClick = useCallback(() => {
    if (open || disabled) return;
    setDateFocus({
      month: value ? moment(value).month() : props.month || moment().month(),
      year: value ? moment(value).year() : props.year || moment().year(),
    });
    setOpen(true);
    if (dateAppendOnFirstOpen && !refFirstOpen.current) {
      onChange(dateAppendOnFirstOpen);
      refFirstOpen.current = true;
    }
    timeSelectRef.current?.scrollIntoSelectedItem?.();
  }, [open, value, dateAppendOnFirstOpen, props.month, props.year, disabled]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClickDay = useCallback(
    (date: Moment) => {
      if (isTimeSameDay) {
        const { startTime, endTime } = timeRangeSelectRef.current?.getTempTimes?.() || {};
        onChange(
          moment(date)
            .hour(startTime ? startTime.hour() : 0)
            .minutes(startTime ? startTime.minute() : 0)
            .toDate()
        );
        onChangeSecond?.(
          moment(date)
            .hour(endTime ? endTime.hour() : 23)
            .minutes(endTime ? endTime.minute() : 59)
            .toDate()
        );
      } else {
        const time = timeSelectRef.current?.getTempTime?.();
        onChange(
          moment(date)
            .hour(time ? time.hour : 10)
            .minutes(time ? time.minute : 0)
            .toDate()
        );
      }
    },
    [onChange, onChangeSecond, isTimeSameDay]
  );

  const handleChangeStartTime = useCallback(
    (hour: number, minute: number) => {
      if (!value) return;
      onChange(moment(value).hour(hour).minute(minute).toDate());
    },
    [value, onChange]
  );

  const handleChangeEndTime = useCallback(
    (hour: number, minute: number) => {
      if (!onChangeSecond || !value) return;
      onChangeSecond?.(moment(value).hour(hour).minute(minute).toDate());
    },
    [value, onChangeSecond]
  );

  const startTime = useMemo(() => {
    return value
      ? {
          hour: value.getHours(),
          minute: value.getMinutes(),
        }
      : null;
  }, [value]);

  const endTime = useMemo(() => {
    return secondValue
      ? {
          hour: secondValue.getHours(),
          minute: secondValue.getMinutes(),
        }
      : null;
  }, [secondValue]);

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
          isTimeSameDay={isTimeSameDay}
          required={required}
          value={value}
          onChange={onChange}
          secondValue={secondValue}
          onChangeSecond={onChangeSecond}
          onChangeDateFocus={setDateFocus}
          placeholder={placeholder}
          focused={open}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
      <Popover open={open} onClose={handleClose} placement={placement} reference={activatorRef.current}>
        <Box display="flex">
          <Box width={theme.pxToRem(312)}>
            <Toolbar>
              <MonthPrevNext month={month} year={year} onChangeDateFocus={setDateFocus} />
              {!!isTimeSameDay && (
                <TimeRangeSelect
                  ref={timeRangeSelectRef}
                  startTime={startTime}
                  endTime={endTime}
                  onChangeStartTime={handleChangeStartTime}
                  onChangeEndTime={handleChangeEndTime}
                  periodTime={periodTime}
                />
              )}
            </Toolbar>
            <Calendar
              firstDate={value}
              month={month}
              year={year}
              onClickDay={handleClickDay}
              minDate={minDate}
              maxDate={maxDate}
            />
          </Box>
          {!isTimeSameDay && <TimeSelect ref={timeSelectRef} value={value} onChange={handleChangeStartTime} />}
        </Box>
      </Popover>
    </Fragment>
  );
};

TimePicker.displayName = "TimePicker";
export default memo(TimePicker);
