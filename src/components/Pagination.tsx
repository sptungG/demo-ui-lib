import React, { Fragment, memo, useCallback, useMemo } from "react";
import styled, { css, useTheme } from "styled-components";
import ArrowChevronLeftIcon from "../assets/svgr/ArrowChevronLeftIcon";
import { v4 as uuidv4 } from "uuid";
import useRippleCenter, { cssRippleCenter } from "../hooks/useRippleCenter";
import { Box, cssSpacing, Dropdown, IconButton, Spacing, Typography } from "../index";
import ArrowChevronRightIcon from "../assets/svgr/ArrowChevronRightIcon";

export interface PaginationProps extends Spacing {
  limit: number;
  total: number;
  disabled?: boolean;
  shortPagination?: boolean;
  nameObjectSelected?: string;
  onChange?: (pageNumber: number, limit: number) => void;
  currentPage: number;
  selected?: boolean;
  id?: string;
}

const range = (start: number, end: number) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ limit, total, currentPage = 1, onChange, selected, disabled, shortPagination, ...props }, ref) => {
    const theme = useTheme();
    const count = Math.ceil(total / limit);
    const paginationRange = useMemo(() => {
      const maxNumberAppear = 7;
      if (maxNumberAppear >= count) {
        return range(1, count);
      }

      const leftSiblingIndex = Math.max(currentPage - 1, 1);
      const rightSiblingIndex = Math.min(currentPage + 1, count);

      const leftDots = leftSiblingIndex > 2;
      const rightDots = rightSiblingIndex < count - 2;

      if (!leftDots && rightDots) {
        let leftNumbers = range(1, 5);
        return [...leftNumbers, "...", count];
      }
      if (leftDots && !rightDots) {
        let rightNumbers = range(count - 4, count);
        return [1, "...", ...rightNumbers];
      }
      if (leftDots && rightDots) {
        let middleNumbers = range(leftSiblingIndex, rightSiblingIndex);
        return [1, "...", ...middleNumbers, "...", count];
      }
    }, [count, currentPage]);
    const onNextPage = useCallback(() => {
      if (currentPage !== count) {
        onChange?.(currentPage + 1, limit);
      }
    }, [onChange, currentPage]);
    const onPreviousPage = useCallback(() => {
      if (currentPage !== 1) {
        onChange?.(currentPage - 1, limit);
      }
    }, [onChange, currentPage]);
    const onLimit = useCallback(
      (value) => {
        onChange?.(1, value.id);
      },
      [onChange, currentPage]
    );
    return (
      <Fragment>
        {!shortPagination ? (
          <StyledPaginationContainer {...props} ref={ref}>
            <Typography>{theme.i18n("display")}</Typography>
            <Dropdown
              onChange={onLimit}
              value={{ id: limit }}
              size="small"
              placement="top"
              strategy="fixed"
              renderOption={(e) => e.id}
              width={76 / 4}
              mx={3}
              options={[{ id: 20 }, { id: 50 }, { id: 100 }]}
            />
            <Typography>{theme.i18n("result")}</Typography>
            <Typography align="center" minWidth={312 / 4} px={4} noWrap>
              {theme.i18n("pagination_from_to", {
                from: (currentPage - 1) * limit + 1,
                to: currentPage * limit > total ? total : currentPage * limit,
                total: total,
              })}
            </Typography>
            <StyledIconButton size="small" variant="text" onClick={onPreviousPage} disabled={currentPage === 1}>
              <ArrowChevronLeftIcon />
            </StyledIconButton>
            {paginationRange
              ? paginationRange.map((pageNumber, index) => {
                  if (pageNumber === "...") {
                    return (
                      <PaginationItem key={index} disabled>
                        ...
                      </PaginationItem>
                    );
                  } else if (typeof pageNumber !== "string") {
                    return (
                      <PaginationItem
                        key={index}
                        onClick={() => onChange?.(pageNumber, limit)}
                        selected={pageNumber === currentPage}
                      >
                        {pageNumber}
                      </PaginationItem>
                    );
                  }
                })
              : null}
            <StyledIconButton size="small" variant="text" onClick={onNextPage} disabled={currentPage === count}>
              <ArrowChevronRightIcon />
            </StyledIconButton>
          </StyledPaginationContainer>
        ) : (
          <StyledPaginationContainer2 {...props} ref={ref}>
            <Typography align="center" noWrap>
              {theme.i18n("total_data", { total: total, name: props.nameObjectSelected })}
            </Typography>
            <Box display="flex">
              <StyledIconButton size="small" variant="text" onClick={onPreviousPage} disabled={currentPage === 1}>
                <ArrowChevronLeftIcon />
              </StyledIconButton>
              {paginationRange
                ? paginationRange.map((pageNumber, index) => {
                    if (pageNumber === "...") {
                      return (
                        <PaginationItem key={index} disabled>
                          ...
                        </PaginationItem>
                      );
                    } else if (typeof pageNumber !== "string") {
                      return (
                        <PaginationItem
                          key={index}
                          onClick={() => onChange?.(pageNumber, limit)}
                          selected={pageNumber === currentPage}
                        >
                          {pageNumber}
                        </PaginationItem>
                      );
                    }
                  })
                : null}
              <StyledIconButton size="small" variant="text" onClick={onNextPage} disabled={currentPage === count}>
                <ArrowChevronRightIcon />
              </StyledIconButton>
            </Box>
          </StyledPaginationContainer2>
        )}
      </Fragment>
    );
  }
);

const StyledPaginationContainer = styled.div<Partial<PaginationProps>>`
  display: inline-flex;
  padding: ${({ theme }) => theme.pxToRem(12)} 0;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.pxToRem(24)};
  align-items: center;
  height: ${({ theme }) => theme.pxToRem(54)};
  align-self: center;
  box-sizing: border-box;

  ${(props) => cssSpacing(props)}
`;

const StyledPaginationContainer2 = styled.div<Partial<PaginationProps>>`
  display: inline-flex;
  padding: ${({ theme }) => theme.pxToRem(12)} ${({ theme }) => theme.pxToRem(24)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.pxToRem(54)};
  align-self: center;
  box-sizing: border-box;

  ${(props) => cssSpacing(props)}
`;

const StyledIconButton = styled(IconButton)<Pick<PaginationProps, "disabled" | "selected">>`
  color: ${(p) => p.theme.palette.ink["40"]};
  align-self: center;
  padding: 0;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: ${(p) => p.theme.palette.ink["30"]};
      `;
    } else {
      return css`
        &:hover {
          background-color: ${(p) => p.theme.palette.ink["20"]};
        }
      `;
    }
  }}
}
`;

interface PaginationItemProps extends React.PropsWithChildren<{}> {
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const PaginationItem = (props: PaginationItemProps) => {
  const uid = useMemo(() => uuidv4(), []);
  useRippleCenter(uid);
  return <StyledPaginationItem {...props} id={uid} />;
};

const StyledPaginationItem = styled.li<Pick<PaginationProps, "disabled" | "selected">>`
  height: ${(p) => p.theme.pxToRem(24)};
  min-width: ${(p) => p.theme.pxToRem(24)};
  justify-content: center;
  text-align: center;
  display: flex;
  box-sizing: border-box;
  padding-left: ${(p) => p.theme.pxToRem(4)};
  padding-right: ${(p) => p.theme.pxToRem(4)};
  align-items: center;
  border-radius: ${(p) => p.theme.pxToRem(25)};
  font-size: 1px;
  ${({ theme }) => theme.typography["body1"]};
  margin: auto ${(p) => p.theme.pxToRem(4)};
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;

  ${() => cssRippleCenter}

  ${({ selected, disabled }) => {
    if (selected) {
      return css`
        color: white;
        background-color: ${(p) => p.theme.palette.primary.main};
      `;
    } else if (!disabled) {
      return css`
        &:hover {
          background-color: ${(p) => p.theme.palette.primary["10"]};
        }
      `;
    }
  }}
`;

Pagination.displayName = "Pagination";
export default memo(Pagination);
