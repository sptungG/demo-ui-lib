import React, { memo, useCallback, useEffect, useState } from "react";
import TextField from "./TextField";
import moment from "moment";
import { useTheme } from "styled-components";
import { CalendarIcon } from "../assets/svgr";
import { HorizontalSizing } from "../theme";
import { isEmpty, isNil } from "lodash";
import { Moment } from "moment/moment";

interface DateFieldProps extends HorizontalSizing {
  value: Date | null | undefined;
  onChange: (date: Date | null) => void;
  format: string;
  secondValue?: Date | null;
  onChangeSecond?: (date: Date | null) => void;
  onChangeDateFocus?: React.Dispatch<React.SetStateAction<{ month: number; year: number }>>;
  autoFocus?: boolean;
  id?: string;
  label?: string;
  placeholder?: string;
  isDateRange?: boolean;
  isTimeSameDay?: boolean;
  helperText?: string | null;
  required?: boolean;
  error?: boolean;
  focused?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  minDate?: Date | null;
  maxDate?: Date | null;
}

const DateField = memo(
  React.forwardRef<HTMLInputElement, DateFieldProps>(
    (
      {
        isDateRange,
        focused,
        isTimeSameDay,
        placeholder,
        format,
        onChange,
        onChangeSecond,
        secondValue,
        value,
        onClick,
        disabled,
        width = "100%",
        minWidth,
        maxWidth,
        onChangeDateFocus,
        minDate,
        maxDate,
        ...props
      },
      ref
    ) => {
      const theme = useTheme();
      const getText = () => {
        if (isDateRange) {
          return value || secondValue
            ? `${value ? moment(value).format(format) : theme.i18n("from")} - ${
                secondValue ? moment(secondValue).format(format) : theme.i18n("to")
              }`
            : undefined;
        } else if (isTimeSameDay) {
          return value
            ? `${moment(value).format(format)} - ${secondValue ? moment(secondValue).format("HH:mm") : ""}`
            : undefined;
        }
        return value ? moment(value).format(format) : undefined;
      };
      const [text, setText] = useState(getText());
      const [forceUpdate, setForceUpdate] = useState(0);

      useEffect(() => {
        setText(getText());
      }, [value, secondValue, isDateRange, forceUpdate]);

      const handleSubmit = useCallback(
        (text: string | null | undefined, date: Moment | null | undefined) => {
          if (isDateRange) {
            if (isNil(text) || isEmpty(text)) {
              onChange(null);
              onChangeSecond?.(null);
              return;
            }
            const dates = text?.split(" - ") || [];
            const firstDate = dates[0] ? moment(dates[0], format) : null;
            const lastDate = dates[1] ? moment(dates[1], format) : null;
            if (firstDate && firstDate.isValid() && !firstDate.isSame(value, "day")) {
              onChange(firstDate.toDate());
              return;
            } else if (lastDate && lastDate.isValid() && !lastDate.isSame(secondValue, "day")) {
              if (lastDate.isSame(value, "day")) {
                onChangeSecond?.(null);
              } else if (lastDate.isBefore(value, "day")) {
                onChange(lastDate.toDate());
              } else {
                onChangeSecond?.(lastDate.toDate());
              }
              return;
            } else if (value || secondValue) {
              setForceUpdate((prev) => prev + 1);
            }
          } else if (isTimeSameDay) {
            if (isNil(text) || isEmpty(text)) {
              onChange(null);
              onChangeSecond?.(null);
              return;
            }
            const dates = text?.split(" - ") || [];
            let firstTime = dates[0] ? moment(dates[0], format) : null;
            const _lastTime = dates[1] ? moment(dates[1], "HH:mm") : null;
            if (firstTime && firstTime.isValid() && !firstTime.isSame(value, "minute")) {
              onChangeDateFocus?.({
                month: firstTime.month(),
                year: firstTime.year(),
              });
              if (_lastTime && _lastTime.isValid()) {
                let lastTime = firstTime.clone().hour(_lastTime.hour()).minute(_lastTime.minute());
                if (firstTime.isBefore(lastTime, "minute")) {
                  onChange(firstTime.toDate());
                  onChangeSecond?.(lastTime.toDate());
                } else {
                  onChange(lastTime.toDate());
                  onChangeSecond?.(firstTime.toDate());
                }
              } else {
                onChange(firstTime.toDate());
                onChangeSecond?.(firstTime.endOf("day").toDate());
              }
            }
          } else {
            if (isNil(text) || isEmpty(text) || isNil(date)) {
              onChange(null);
              return;
            }
            if (!date.isValid()) {
              setForceUpdate((prev) => prev + 1);
              return;
            }
            if (!!(minDate && date.isBefore(minDate, "day")) || !!(maxDate && date.isAfter(maxDate))) {
              setForceUpdate((prev) => prev + 1);
              if (minDate) onChange(minDate);
              return;
            }
            onChange(date.toDate());
            onChangeDateFocus?.({
              month: date.month(),
              year: date.year(),
            });
          }
        },
        [onChangeDateFocus, isDateRange, onChange, onChangeSecond, secondValue, value, format]
      );

      const handleBlur = useCallback(
        (event: any) => {
          const text = event.target.value || "";
          const date = moment(text, format);
          handleSubmit(text, date);
        },
        [handleSubmit]
      );

      const handleKeyDown = useCallback(
        (event: any) => {
          if (event.keyCode === 13) {
            const text = event.target.value || "";
            const date = moment(text, format);
            handleSubmit(text, date);
          }
        },
        [handleSubmit]
      );

      return (
        <TextField
          ref={ref}
          value={text}
          {...props}
          onClick={onClick}
          placeholder={placeholder}
          onChange={setText}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          focused={focused}
          disabled={disabled}
          endIcon={
            <CalendarIcon onClick={onClick} color={focused ? "primary" : theme.palette.ink["40"]} size="regular" />
          }
        />
      );
    }
  )
);

DateField.displayName = "DateField";
export default DateField;
