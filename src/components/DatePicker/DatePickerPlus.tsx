import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import Popover from "../Popover";
import styled, { css, CSSObject, useTheme } from "styled-components";
import Button from "../Button";
import DatePicker from "./DatePicker";
import { ButtonSelect, HorizontalSizing } from "../../index";
import Box from "../Box";
import { Placement } from "@popperjs/core";
import { ButtonSelectProps } from "../ButtonSelect";

export type TextDateTransfer =
  | "today"
  | "yesterday"
  | "day_last_7"
  | "day_last_30"
  | "this_week"
  | "last_week"
  | "last_month"
  | "this_month"
  | "last_year"
  | "this_year";

export interface DateTransfer {
  firstDate: Date | null | undefined;
  lastDate: Date | null | undefined;
  textTransfer: TextDateTransfer | null | undefined;
}

export interface ActivatorDatePickerPlusProps {
  reference: React.MutableRefObject<any>;
  onClick: () => void;
  open: boolean;
}

interface DatePickerPlusProps extends HorizontalSizing {
  value: DateTransfer | null | undefined;
  onChange: (dateTransfer: DateTransfer) => void;
  options?: (TextDateTransfer | "custom")[];
  //The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December
  month?: number;
  year?: number;
  minDate?: Date;
  maxDate?: Date;
  changeOnSubmit?: boolean;
  //true: Label button using placeholder
  fixedPlaceholder?: boolean;
  label?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string | null;
  placeholder?: string;
  buttonProps?: Partial<ButtonSelectProps>;
  popperWidth?: CSSObject["width"];
  placement?: Placement;
  id?: string;
  highlight?: boolean;
  inline?: boolean;
  renderActivator?: (props: ActivatorDatePickerPlusProps) => React.ReactNode;
  size?: "small" | "medium" | "regular";
  disabledClear?: boolean;
}

const DatePickerPlus = (props: DatePickerPlusProps) => {
  const theme = useTheme();
  const {
    onChange,
    label,
    required,
    error,
    helperText,
    placeholder,
    popperWidth,
    placement = "bottom-end",
    changeOnSubmit,
    value: valueProp,
    width = "100%",
    minWidth,
    maxWidth,
    buttonProps,
    inline,
    renderActivator,
    highlight,
    size,
    fixedPlaceholder,
    disabledClear,
    minDate,
    maxDate,
  } = props;
  const [firstDate, setFirstDate] = useState(valueProp?.firstDate);
  const [lastDate, setLastDate] = useState(valueProp?.lastDate);
  const [predefinedDate, setPredefinedDate] = useState(valueProp?.textTransfer);
  useEffect(() => {
    setFirstDate(valueProp?.firstDate);
  }, [valueProp?.firstDate]);
  useEffect(() => {
    setLastDate(valueProp?.lastDate);
  }, [valueProp?.lastDate]);
  useEffect(() => {
    setPredefinedDate(valueProp?.textTransfer);
  }, [valueProp?.textTransfer]);
  const [{ month, year }, setDateFocus] = useState({
    month: firstDate ? moment(firstDate).month() : props.month || moment().subtract(1, "month").month(),
    year: firstDate ? moment(firstDate).year() : props.year || moment().subtract(1, "month").year(),
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
  const [selected, setSelected] = useState<TextDateTransfer | "custom" | null | undefined>(
    valueProp?.textTransfer || (valueProp?.firstDate || valueProp?.lastDate ? "custom" : null)
  );

  const handleChange = useCallback(
    (newDateTransfer: Omit<DateTransfer, "textTransfer"> & { textTransfer: typeof selected }, isSubmited?: boolean) => {
      if (changeOnSubmit && !isSubmited) {
        if (
          newDateTransfer.firstDate &&
          newDateTransfer.lastDate &&
          moment(newDateTransfer.firstDate).isAfter(newDateTransfer.lastDate)
        ) {
          setFirstDate(newDateTransfer.lastDate ? moment(newDateTransfer.lastDate).startOf("day").toDate() : null);
          setLastDate(newDateTransfer.firstDate ? moment(newDateTransfer.firstDate).endOf("day").toDate() : null);
        } else {
          setFirstDate(newDateTransfer.firstDate ? moment(newDateTransfer.firstDate).startOf("day").toDate() : null);
          setLastDate(newDateTransfer.lastDate ? moment(newDateTransfer.lastDate).endOf("day").toDate() : null);
        }
        setSelected(newDateTransfer.textTransfer);
      } else {
        if (
          newDateTransfer.firstDate &&
          newDateTransfer.lastDate &&
          moment(newDateTransfer.firstDate).isAfter(newDateTransfer.lastDate)
        ) {
          onChange({
            firstDate: newDateTransfer.lastDate ? moment(newDateTransfer.lastDate).startOf("day").toDate() : null,
            lastDate: newDateTransfer.firstDate ? moment(newDateTransfer.firstDate).endOf("day").toDate() : null,
            textTransfer: newDateTransfer.textTransfer === "custom" ? null : newDateTransfer.textTransfer,
          });
        } else {
          onChange({
            firstDate: newDateTransfer.firstDate ? moment(newDateTransfer.firstDate).startOf("day").toDate() : null,
            lastDate: newDateTransfer.lastDate ? moment(newDateTransfer.lastDate).endOf("day").toDate() : null,
            textTransfer: newDateTransfer.textTransfer === "custom" ? null : newDateTransfer.textTransfer,
          });
        }
        setSelected(newDateTransfer.textTransfer);
      }
      if (changeOnSubmit && isSubmited) setOpen(false);
    },
    [onChange, changeOnSubmit]
  );

  const options = useMemo(
    () =>
      [
        { label: theme.i18n("today"), id: "today" },
        { label: theme.i18n("yesterday"), id: "yesterday" },
        { label: theme.i18n("day_last_7"), id: "day_last_7" },
        { label: theme.i18n("day_last_30"), id: "day_last_30" },
        { label: theme.i18n("last_week"), id: "last_week" },
        { label: theme.i18n("this_week"), id: "this_week" },
        { label: theme.i18n("last_month"), id: "last_month" },
        { label: theme.i18n("this_month"), id: "this_month" },
        { label: theme.i18n("last_year"), id: "last_year" },
        { label: theme.i18n("this_year"), id: "this_year" },
        { label: theme.i18n("custom"), id: "custom" },
      ].filter((e) => !props.options || props.options.includes(e.id as any)),
    [props.options]
  );

  const handleClick = useCallback(() => {
    if (open) {
      setOpen(false);
      return;
    }
    setFirstDate(valueProp?.firstDate);
    setLastDate(valueProp?.lastDate);
    setSelected(
      (prev) =>
        valueProp?.textTransfer ||
        (valueProp?.firstDate || valueProp?.lastDate ? "custom" : prev === "custom" ? prev : null)
    );
    setDateFocus({
      month: valueProp?.firstDate
        ? moment(valueProp.firstDate).month()
        : props.month || moment().subtract(1, "month").month(),
      year: valueProp?.firstDate
        ? moment(valueProp.firstDate).year()
        : props.year || moment().subtract(1, "month").year(),
    });
    setOpen(true);
  }, [open, valueProp, props.month, props.year]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClickOption = useCallback(
    (value: string) => {
      if (selected === value) {
        if (disabledClear) return;
        handleChange({
          firstDate: null,
          lastDate: null,
          textTransfer: null,
        });
        return;
      }
      switch (value) {
        case "today":
          handleChange({
            firstDate: moment().startOf("day").toDate(),
            lastDate: moment().endOf("day").toDate(),
            textTransfer: value,
          });
          break;
        case "yesterday":
          handleChange({
            firstDate: moment().startOf("day").subtract(1, "day").toDate(),
            lastDate: moment().endOf("day").subtract(1, "day").toDate(),
            textTransfer: value,
          });
          break;
        case "day_last_7":
          handleChange({
            firstDate: moment().startOf("day").subtract(7, "days").toDate(),
            lastDate: moment().endOf("day").subtract(1, "day").toDate(),
            textTransfer: value,
          });
          break;
        case "day_last_30":
          handleChange({
            firstDate: moment().startOf("day").subtract(30, "days").toDate(),
            lastDate: moment().endOf("day").subtract(1, "day").toDate(),
            textTransfer: value,
          });
          break;
        case "this_week":
          handleChange({
            firstDate: moment().startOf("weeks").add(1, "days").toDate(),
            lastDate: moment().endOf("week").add(1, "days").toDate(),
            textTransfer: value,
          });
          break;
        case "last_week":
          handleChange({
            firstDate: moment().subtract(1, "days").subtract(1, "weeks").startOf("week").add(1, "days").toDate(),
            lastDate: moment().subtract(1, "days").subtract(1, "weeks").endOf("week").add(1, "days").toDate(),
            textTransfer: value,
          });
          break;
        case "last_month":
          handleChange({
            firstDate: moment().subtract(1, "month").startOf("month").toDate(),
            lastDate: moment().subtract(1, "month").endOf("month").toDate(),
            textTransfer: value,
          });
          break;
        case "this_month":
          handleChange({
            firstDate: moment().startOf("month").toDate(),
            lastDate: moment().endOf("month").toDate(),
            textTransfer: value,
          });
          break;
        case "last_year":
          handleChange({
            firstDate: moment().subtract(1, "year").startOf("year").toDate(),
            lastDate: moment().subtract(1, "year").endOf("year").toDate(),
            textTransfer: value,
          });
          break;
        case "this_year":
          handleChange({
            firstDate: moment().startOf("year").toDate(),
            lastDate: moment().endOf("year").toDate(),
            textTransfer: value,
          });
          break;
        case "custom":
          handleChange({
            firstDate: valueProp?.firstDate,
            lastDate: valueProp?.lastDate,
            textTransfer: value,
          });
          break;
      }
    },
    [handleChange, valueProp, selected]
  );

  const Activator = useMemo(() => {
    return renderActivator?.({
      onClick: handleClick,
      open: open,
      reference: activatorRef,
    });
  }, [renderActivator, activatorRef, open, valueProp, handleClick]);

  const Content = (
    <Fragment>
      <ListOption>
        {options.map((option) => (
          <Option
            key={option.id}
            active={option.id === selected}
            onClick={() => handleClickOption(option.id)}
            variant="outlined"
          >
            {option.label}
          </Option>
        ))}
      </ListOption>
      {selected === "custom" && (
        <InputsContainer>
          <DatePicker
            isYearSelect
            placeholder="dd/mm/yyyy"
            value={firstDate}
            onChange={(date) =>
              handleChange({
                firstDate: date,
                lastDate: lastDate,
                textTransfer: "custom",
              })
            }
            popperWidth={theme.pxToRem(332)}
            placement="bottom-start"
            minDate={minDate}
            month={month}
            year={year}
          />
          <Hr />
          <DatePicker
            isYearSelect
            placeholder="dd/mm/yyyy"
            value={lastDate}
            onChange={(date) =>
              handleChange({
                firstDate: firstDate,
                lastDate: date,
                textTransfer: "custom",
              })
            }
            popperWidth={theme.pxToRem(332)}
            placement="bottom-end"
            minDate={minDate}
            maxDate={maxDate}
            month={nextMonth}
            year={nextYear}
          />
        </InputsContainer>
      )}
      {changeOnSubmit && (
        <Button
          mt={4}
          width="100%"
          onClick={() =>
            handleChange(
              {
                firstDate: firstDate,
                lastDate: lastDate,
                textTransfer: selected,
              },
              true
            )
          }
        >
          {theme.i18n("filter")}
        </Button>
      )}
    </Fragment>
  );

  return (
    <Fragment>
      {Activator ? (
        Activator
      ) : (
        <ButtonSelect
          active={highlight || open}
          ref={activatorRef}
          onClick={handleClick}
          label={label}
          error={error}
          helperText={helperText}
          placeholder={placeholder}
          required={required}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          size={size}
          {...buttonProps}
        >
          {fixedPlaceholder ? (
            placeholder
          ) : (
            <>
              {changeOnSubmit
                ? valueProp?.firstDate || valueProp?.lastDate
                  ? `${valueProp?.firstDate ? moment(valueProp.firstDate).format(format) : "Từ trước"} - ${
                      valueProp?.lastDate ? moment(valueProp.lastDate).format(format) : "đến nay"
                    }`
                  : placeholder
                : selected === "custom"
                ? firstDate || lastDate
                  ? `${firstDate ? moment(firstDate).format(format) : "Từ trước"} - ${
                      lastDate ? moment(lastDate).format(format) : "đến nay"
                    }`
                  : placeholder
                : predefinedDate
                ? options.filter((e) => e.id === predefinedDate)?.[0]?.label
                : placeholder}
            </>
          )}
        </ButtonSelect>
      )}
      {inline ? (
        open ? (
          <StyledBoxContent width={popperWidth}>{Content}</StyledBoxContent>
        ) : null
      ) : (
        <Popover
          width={popperWidth || theme.pxToRem(364)}
          placement={placement}
          open={open}
          onClose={handleClose}
          reference={activatorRef.current}
        >
          <Box padding={4}>{Content}</Box>
        </Popover>
      )}
    </Fragment>
  );
};

DatePickerPlus.displayName = "DatePickerPlus";
export default memo(DatePickerPlus);

const StyledBoxContent = styled(Box)`
  overflow: hidden;
  margin-top: ${({ theme }) => theme.pxToRem(4)};
`;

const Hr = styled.div`
  height: 1px;
  flex: none;
  background: ${({ theme }) => theme.palette.ink["40"]};
  width: ${({ theme }) => theme.pxToRem(4)};
  margin: 0 ${({ theme }) => theme.pxToRem(8)};
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.pxToRem(16)} 0 0;
  margin: 0;
`;

const ListOption = styled.div`
  display: flex;
  padding: 0;
  box-sizing: border-box;
  margin: ${({ theme }) => theme.pxToRem(-4)};
  flex-wrap: wrap;
`;

const Option = styled(Button)<{ active?: boolean }>`
  ${({ theme }) => theme.typography["body1"]};
  color: ${({ theme, active }) => (active ? theme.palette.primary.main : theme.palette.ink.main)};
  width: calc(50% - ${({ theme }) => theme.pxToRem(8)});
  margin: ${({ theme }) => theme.pxToRem(4)};
  border: 1px solid ${({ theme, active }) => (active ? theme.palette.primary.main : theme.palette.stroke)};
  background: ${({ theme, active }) => (active ? theme.palette.primary["5"] : "transparent")};

  &:last-child {
    width: calc(100% - ${({ theme }) => theme.pxToRem(8)});
  }

  ${({ active }) => {
    if (!active) {
      return css`
        &:hover {
          border-color: ${(p) => p.theme.palette.ink["5"]};
          background-color: ${(p) => p.theme.palette.ink["5"]};
        }
      `;
    }
  }}
`;
