import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";

interface TimeSelectProps {
  value: Date | null | undefined;
  onChange: (hour: number, minute: number) => void;
  periodTime?: 15 | 30;
}

export interface TimeSelectRef {
  getTempTime: () => {
    hour: number;
    minute: number;
  } | null;
  scrollIntoSelectedItem: () => void;
}

const TimeSelect = memo(
  React.forwardRef<TimeSelectRef, TimeSelectProps>(({ value, onChange, periodTime = 30 }, ref) => {
    const tempTime = useRef(value ? moment(value).format("HH:mm") : null);
    const [, forceUpdate] = useState(0);
    const uid = useMemo(() => `$Sapo-TimePicker__TimeSelect-${uuidv4()}`, []);
    const count = 24 * (60 / periodTime);

    const scrollIntoSelectedItem = useCallback(() => {
      setTimeout(() => {
        const container = document.getElementById(uid);
        const element = container?.querySelector(`[data-value='${tempTime.current}']`);
        element?.scrollIntoView({ block: "center", inline: "start" });
      });
    }, [uid]);

    const handleChangeTempTime = useCallback((time: string) => {
      forceUpdate((prev) => prev + 1);
      tempTime.current = time;
    }, []);

    React.useImperativeHandle(
      ref,
      () => ({
        getTempTime() {
          const time = moment(tempTime.current, "HH:mm");
          return tempTime.current
            ? {
                hour: time.hour(),
                minute: time.minute(),
              }
            : null;
        },
        scrollIntoSelectedItem: scrollIntoSelectedItem,
      }),
      [scrollIntoSelectedItem]
    );

    useEffect(() => {
      if (value && moment(value).format("HH:mm") !== tempTime.current) {
        handleChangeTempTime(moment(value).format("HH:mm"));
        scrollIntoSelectedItem();
      }
    }, [value]);

    const options = useMemo(() => {
      const firstTime = moment().hour(0).minute(0).seconds(0);
      const current = firstTime.clone();
      let items = [];
      let i = 0;
      while (i < count && firstTime.diff(current, "day") === 0) {
        items.push(current.format("HH:mm"));
        current.add(periodTime, "minutes");
        i++;
      }
      return items;
    }, [periodTime]);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target?.getAttribute("role") !== "option") return;
        const dataVal = target.getAttribute("data-value");
        if (!dataVal) return;
        const time = moment(dataVal, "HH:mm");
        handleChangeTempTime(dataVal);
        if (value) {
          onChange(time.hour(), time.minute());
        }
      },
      [value, onChange, handleChangeTempTime]
    );

    return (
      <StyledTimeSelect id={uid}>
        {options.map((item) => (
          <TimeItem key={item} role="option" data-value={item} active={item === tempTime.current} onClick={handleClick}>
            {item}
          </TimeItem>
        ))}
      </StyledTimeSelect>
    );
  })
);

TimeSelect.displayName = "TimeSelect";
export default TimeSelect;

const StyledTimeSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${(p) => p.theme.pxToRem(16)};
  margin: ${(p) => p.theme.pxToRem(48)} 0 ${(p) => p.theme.pxToRem(16)};
  overflow: hidden scroll;
  height: ${(p) => p.theme.pxToRem(44 * 6)};

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(6)};
    height: ${({ theme }) => theme.pxToRem(8)};
    background-color: ${({ theme }) => theme.palette.ink["20"]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.pxToRem(6)};
    background-color: ${({ theme }) => theme.palette.ink["40"]};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.ink["20"]};
  }
`;

const TimeItem = styled.button<{ active: boolean }>`
  width: ${(p) => p.theme.pxToRem(92)};
  height: ${(p) => p.theme.pxToRem(40)};
  margin: 2px 0;
  border: 1px solid ${(p) => p.theme.palette.ink["40"]};
  background: transparent;
  color: ${(p) => p.theme.palette.ink.main};
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  flex: none;

  &:focus-visible {
    outline: none;
  }

  ${({ active }) =>
    active
      ? css`
          color: ${({ theme }) => theme.palette.ink["5"]};
          background: ${({ theme }) => theme.palette.primary.main};
          border: none;
        `
      : null}
  &:hover {
    background: ${({ theme }) => theme.palette.primary["80"]};
    color: ${({ theme }) => theme.palette.ink["5"]};
  }
`;
