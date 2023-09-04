import React, { memo, useCallback, useMemo } from "react";
import IconButton from "../../IconButton";
import ArrowChevronBigLeftIcon from "../../../assets/svgr/ArrowChevronBigLeftIcon";
import Typography from "../../Typography";
import ArrowChevronBigRightIcon from "../../../assets/svgr/ArrowChevronBigRightIcon";
import styled, { css, useTheme } from "styled-components";
import moment from "moment/moment";

interface MonthPrevNextProps {
  month: number;
  year: number;
  onChangeDateFocus: React.Dispatch<
    React.SetStateAction<{
      month: number;
      year: number;
    }>
  >;
  hiddenNext?: boolean;
  hiddenPrev?: boolean;
}

const MonthPrevNext = memo(({ month, year, onChangeDateFocus, hiddenNext, hiddenPrev }: MonthPrevNextProps) => {
  const theme = useTheme();

  const handlePrev = useCallback(() => {
    onChangeDateFocus((prev) => {
      const newMonth = moment().year(prev.year).month(prev.month).subtract(1, "month");
      return {
        year: newMonth.year(),
        month: newMonth.month(),
      };
    });
  }, [onChangeDateFocus, year, month]);

  const handleNext = useCallback(() => {
    onChangeDateFocus((prev) => {
      const newMonth = moment().year(prev.year).month(prev.month).add(1, "month");
      return {
        year: newMonth.year(),
        month: newMonth.month(),
      };
    });
  }, [onChangeDateFocus, year, month]);

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
      ].map((e, idx) => ({
        id: idx,
        label: theme.i18n(e),
      })),
    []
  );

  return (
    <StyledMonthPrevNext>
      <StyledIconButton hidden={hiddenPrev} size="small" color="secondary" onClick={handlePrev}>
        <ArrowChevronBigLeftIcon style={{ height: theme.pxToRem(16) }} />
      </StyledIconButton>
      <div>
        <Typography variant="h6">
          <span style={{ fontWeight: 500 }}>{months.filter((e) => e.id === month)?.[0]?.label}</span>&nbsp;
          <span>{year}</span>
        </Typography>
      </div>
      <StyledIconButton hidden={hiddenNext} size="small" color="secondary" onClick={handleNext}>
        <ArrowChevronBigRightIcon style={{ height: theme.pxToRem(16) }} />
      </StyledIconButton>
    </StyledMonthPrevNext>
  );
});

const StyledIconButton = styled(IconButton)<{ hidden?: boolean }>`
  ${({ hidden }) => {
    if (hidden)
      return css`
        opacity: 0;
        visibility: visible;
        pointer-events: none;
      `;
  }}
`;

const StyledMonthPrevNext = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.pxToRem(16)};
  height: ${({ theme }) => theme.pxToRem(48)};
`;

MonthPrevNext.displayName = "MonthPrevNext";
export default MonthPrevNext;
