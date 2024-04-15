import React, { memo, useCallback, useMemo } from "react";
import styled, { useTheme } from "styled-components";
import moment from "moment/moment";
import Dropdown from "../../Dropdown";

interface YearSelectProps {
  month: number;
  year: number;
  onChangeDateFocus: React.Dispatch<
    React.SetStateAction<{
      month: number;
      year: number;
    }>
  >;
  minDate?: Date | null;
  maxDate?: Date | null;
}

const YearSelect = memo(({ minDate, maxDate, month, year, onChangeDateFocus }: YearSelectProps) => {
  const theme = useTheme();
  const handleChangeMonth = useCallback((newMonth: { id: string; label: string }) => {
    onChangeDateFocus((prev) => ({
      ...prev,
      month: +newMonth.id,
      year: prev.year,
    }));
  }, []);

  const handleChangeYear = useCallback((newYear: { id: string; label: string }) => {
    onChangeDateFocus((prev) => {
      let month = prev.month;
      if (maxDate && maxDate.getFullYear() === year && month > maxDate.getMonth()) {
        month = maxDate.getMonth();
      }
      if (minDate && minDate.getFullYear() === year && month < minDate.getMonth()) {
        month = minDate.getMonth();
      }
      return {
        ...prev,
        month: month,
        year: +newYear.id,
      };
    });
  }, []);

  const months = useMemo(
    () =>
      [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ]
        .map((e, idx) => ({
          id: idx,
          label: theme.i18n(e),
        }))
        .filter((current) => {
          if (maxDate && maxDate.getFullYear() === year && current.id > maxDate.getMonth()) {
            return false;
          }
          return !(minDate && minDate.getFullYear() === year && current.id < minDate.getMonth());
        }),
    [minDate, maxDate, year]
  );

  const years = useMemo(() => {
    let _years = [];
    for (let i = 0; i < 400; i++) {
      let year = moment().year() - 23 - 200 + i;
      if (minDate && minDate.getFullYear() > year) {
        continue;
      }
      if (maxDate && maxDate.getFullYear() < year) {
        break;
      }
      _years.push({
        id: year,
        label: year,
      });
    }
    return _years;
  }, [minDate, maxDate]);

  return (
    <StyledYearSelect>
      <Dropdown
        width={theme.pxToRem(116)}
        renderOption={(e) => e.label}
        value={months.filter((e) => e.id === month)?.[0]}
        onChange={handleChangeMonth}
        options={months}
      />
      <Dropdown
        width={theme.pxToRem(92)}
        ml={4}
        value={year ? { id: year, label: year } : null}
        onChange={handleChangeYear}
        renderOption={(e) => e.label}
        options={years}
      />
    </StyledYearSelect>
  );
});

const StyledYearSelect = styled.div`
  height: ${({ theme }) => theme.pxToRem(48)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default YearSelect;
