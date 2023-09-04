import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import moment from "moment/moment";
import styled from "styled-components";
import { isNil } from "lodash";
import { Moment } from "moment";
import Dropdown from "../../Dropdown";

interface TimeRangeSelectProps {
  startTime: {
    hour: number;
    minute: number;
  } | null;
  endTime:
    | {
        hour: number;
        minute: number;
      }
    | null
    | undefined;
  onChangeStartTime: (hour: number, minute: number) => void;
  onChangeEndTime: (hour: number, minute: number) => void;
  periodTime?: 15 | 30;
}

export interface TimeRangeSelectRef {
  getTempTimes: () => {
    startTime: Moment;
    endTime: Moment;
  };
}

const TimeRangeSelect = memo(
  React.forwardRef<TimeRangeSelectRef, TimeRangeSelectProps>(
    ({ startTime, endTime, onChangeStartTime, onChangeEndTime, periodTime = 30 }, ref) => {
      const [tempStartTime, setTempStartTime] = useState(
        moment()
          .hours(startTime ? startTime.hour : 0)
          .minutes(startTime ? startTime.minute : 0)
      );
      const [tempEndTime, setTempEndTime] = useState(
        moment()
          .hours(endTime ? endTime.hour : 23)
          .minutes(endTime ? endTime.minute : 59)
      );

      React.useImperativeHandle(ref, () => ({
        getTempTimes() {
          return {
            startTime: tempStartTime,
            endTime: tempEndTime,
          };
        },
      }));

      useEffect(() => {
        if (startTime?.hour !== tempStartTime.hour() || startTime?.minute !== tempStartTime.minute()) {
          setTempStartTime(
            moment()
              .hours(startTime ? startTime.hour : 0)
              .minutes(startTime ? startTime.minute : 0)
          );
        }
      }, [startTime]);

      useEffect(() => {
        if (endTime?.hour !== tempEndTime.hour() || endTime?.minute !== tempEndTime.minute()) {
          setTempEndTime(
            moment()
              .hours(endTime ? endTime.hour : 23)
              .minutes(endTime ? endTime.minute : 59)
          );
        }
      }, [endTime]);

      const options = useMemo(() => {
        const firstTime = moment().hour(0).minute(0).seconds(0);
        const current = firstTime.clone();
        const items = [];
        let i = 0;
        while (i < 24 * (60 / periodTime) && firstTime.diff(current, "day") === 0) {
          items.push({
            id: current.format("HH:mm"),
            label: current.format("HH:mm"),
          });
          current.add(periodTime, "minutes");
          i++;
        }
        return items;
      }, [periodTime]);

      const handleChangeStartTime = useCallback(
        (selected: { id: string }) => {
          const momentSelected = moment(selected.id, "HH:mm");
          if (isNil(startTime)) {
            if (tempEndTime && momentSelected.isAfter(tempEndTime, "minute")) {
              setTempEndTime(moment(selected.id, "HH:mm"));
              setTempStartTime(tempEndTime);
            } else setTempStartTime(moment(selected.id, "HH:mm"));
            return;
          }
          let end = endTime ? moment(`${endTime.hour}:${endTime.minute}`, "HH:mm") : null;
          if (end && momentSelected.isAfter(end, "minute")) {
            onChangeStartTime(end.hour(), end.minute());
            onChangeEndTime(momentSelected.hour(), momentSelected.minute());
          } else onChangeStartTime(momentSelected.hour(), momentSelected.minute());
        },
        [tempEndTime, startTime, endTime, onChangeStartTime, onChangeEndTime]
      );

      const handleChangeEndTime = useCallback(
        (selected: { id: string }) => {
          const momentSelected = moment(selected.id, "HH:mm");
          if (isNil(endTime)) {
            if (tempStartTime && momentSelected.isBefore(tempStartTime, "minute")) {
              setTempStartTime(moment(selected.id, "HH:mm"));
              setTempEndTime(tempStartTime);
            } else setTempEndTime(moment(selected.id, "HH:mm"));
            return;
          }
          let start = startTime ? moment(`${startTime.hour}:${startTime.minute}`, "HH:mm") : null;
          if (start && momentSelected.isBefore(start, "minute")) {
            onChangeEndTime(start.hour(), start.minute());
            onChangeStartTime(momentSelected.hour(), momentSelected.minute());
          } else onChangeEndTime(momentSelected.hour(), momentSelected.minute());
        },
        [tempStartTime, startTime, endTime, onChangeStartTime, onChangeEndTime]
      );

      const renderOption = useCallback((e: any) => e?.label, []);

      return (
        <StyledTimeRangeSelect>
          <Dropdown
            width={88 / 4}
            placement="bottom-end"
            value={
              !startTime
                ? {
                    id: tempStartTime.format("HH:mm"),
                    label: tempStartTime.format("HH:mm"),
                  }
                : {
                    id: moment(startTime).format("HH:mm"),
                    label: moment(startTime).format("HH:mm"),
                  }
            }
            onChange={handleChangeStartTime}
            options={options}
            renderOption={renderOption}
          />
          <Strikethrough />
          <Dropdown
            width={88 / 4}
            placement="bottom-end"
            value={
              !endTime
                ? {
                    id: tempEndTime.format("HH:mm"),
                    label: tempEndTime.format("HH:mm"),
                  }
                : {
                    id: moment(endTime).format("HH:mm"),
                    label: moment(endTime).format("HH:mm"),
                  }
            }
            onChange={handleChangeEndTime}
            options={options}
            renderOption={renderOption}
          />
        </StyledTimeRangeSelect>
      );
    }
  )
);

TimeRangeSelect.displayName = "TimeRangeSelect";
export default TimeRangeSelect;

const Strikethrough = styled.div`
  height: ${({ theme }) => theme.pxToRem(2)};
  width: ${({ theme }) => theme.pxToRem(14)};
  margin: 0 ${({ theme }) => theme.pxToRem(13)};
  background: ${({ theme }) => theme.palette.ink["40"]};
`;

const StyledTimeRangeSelect = styled.div`
  height: ${({ theme }) => theme.pxToRem(48)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
