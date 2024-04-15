import React, { Fragment, memo, useCallback, useMemo, useRef, useState } from "react";
import moment, { Moment } from "moment";
import Popover from "../Popover";
import Toolbar from "./Toolbar";
import Calendar from "../Calendar";
import styled, { CSSObject, useTheme } from "styled-components";
import MonthPrevNext from "./Toolbar/MonthPrevNext";
import YearSelect from "./Toolbar/YearSelect";
import DateField from "../DateField";
import Box from "../Box";
import useDateRangePicker from "./useDateRangePicker";
import { Placement } from "@popperjs/core";
import { HorizontalSizing } from "../../theme";

export interface ActivatorDatePickerProps {
  reference: React.MutableRefObject<any>;
  onClick: () => void;
  open: boolean;
}

export interface DatePickerProps extends HorizontalSizing {
  value: Date | null | undefined;
  onChange: (date: Date | null) => void;
  secondValue?: Date | null | undefined;
  onChangeSecond?: (date: Date | null) => void;
  id?: string;
  //The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December
  month?: number;
  //The year to show
  year?: number;
  isYearSelect?: boolean;
  isDateRange?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  label?: string;
  autoFocus?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string | null;
  placeholder?: string;
  disabled?: boolean;
  placement?: Placement;
  highlight?: boolean;
  popperWidth?: CSSObject["width"];
  renderActivator?: (props: ActivatorDatePickerProps) => React.ReactNode;
  dateAppendOnFirstOpen?: Date | null;
}

const DatePicker = ({
  value,
  onChange,
  isDateRange,
  secondValue,
  onChangeSecond,
  children,
  label,
  isYearSelect,
  required,
  error,
  autoFocus,
  helperText,
  placeholder,
  minDate,
  maxDate,
  disabled,
  width = "100%",
  minWidth,
  maxWidth,
  popperWidth,
  placement = "bottom-end",
  renderActivator,
  highlight,
  dateAppendOnFirstOpen,
  ...props
}: React.PropsWithChildren<DatePickerProps>) => {
  const theme = useTheme();
  const [{ month, year }, setDateFocus] = useState({
    month: value ? moment(value).month() : props.month || moment().month(),
    year: value ? moment(value).year() : props.year || moment().year(),
  });
  const format = "DD/MM/YYYY";
  const [open, setOpen] = useState(false);
  const activatorRef = useRef<any>(null);
  const handleDateRange = useDateRangePicker();
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
  }, [open, value, dateAppendOnFirstOpen, props.month, props.year, disabled]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClickDay = useCallback(
    (date: Moment) => {
      if (isDateRange && onChangeSecond) {
        const { firstValue: _f, secondValue: _s } = handleDateRange(date, value, secondValue);
        onChange(_f);
        onChangeSecond(_s ? moment(_s).endOf("days").toDate() : null);
        return;
      }
      if (!value || !date.isSame(value, "day")) {
        setOpen(false);
        onChange(date.startOf("days").toDate());
        return;
      }
    },
    [isDateRange, value, secondValue, onChange, onChangeSecond, handleDateRange]
  );

  const Activator = useMemo(() => {
    return renderActivator?.({
      onClick: handleClick,
      open: open,
      reference: activatorRef,
    });
  }, [renderActivator, activatorRef, open, handleClick]);

  const Content = (
    <Fragment>
      <Toolbar>
        {isYearSelect ? (
          <YearSelect month={month} year={year} minDate={minDate} maxDate={maxDate} onChangeDateFocus={setDateFocus} />
        ) : (
          <MonthPrevNext month={month} year={year} onChangeDateFocus={setDateFocus} />
        )}
      </Toolbar>
      <Calendar
        firstDate={value}
        secondDate={secondValue}
        month={month}
        year={year}
        onClickDay={handleClickDay}
        minDate={minDate}
        maxDate={maxDate}
        isDateRange={isDateRange}
      />
    </Fragment>
  );

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
          isDateRange={isDateRange}
          required={required}
          value={value}
          onChange={onChange}
          secondValue={secondValue}
          onChangeSecond={onChangeSecond}
          onChangeDateFocus={setDateFocus}
          placeholder={placeholder}
          focused={open}
          disabled={disabled}
          width={width}
          maxWidth={maxWidth}
          minWidth={minWidth}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
      <Popover
        open={open}
        width={popperWidth || theme.pxToRem(312)}
        placement={placement}
        onClose={handleClose}
        reference={activatorRef.current}
      >
        {Content}
      </Popover>
    </Fragment>
  );
};

DatePicker.displayName = "DatePicker";
export default memo(DatePicker);

const StyledBoxContent = styled(Box)`
  overflow: hidden;
  margin-top: ${({ theme }) => theme.pxToRem(4)};
`;
