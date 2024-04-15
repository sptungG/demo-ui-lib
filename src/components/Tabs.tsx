import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import ArrowLeftIcon from "../assets/svgr/ArrowLeftIcon";
import ArrowRightIcon from "../assets/svgr/ArrowRightIcon";
import OffOutlineCloseIcon from "../assets/svgr/OffOutlineCloseIcon";
import { v4 as uuidv4 } from "uuid";
import useRippleCenter from "../hooks/useRippleCenter";

export interface TabsProps extends React.PropsWithChildren<{}> {
  tabs: TabDescriptor[];
  //id of Tab
  value: string;
  size?: "big" | "regular";
  unlimitedWidth?: boolean;
  onChange: (tab: TabDescriptor) => void;
  onDelete?: (tab: TabDescriptor) => void;
}

export interface TabDescriptor {
  id: string;
  label: string;
  canDelete?: boolean;
  isShow?: boolean;
}

const Tabs = memo(
  ({ tabs, onDelete, onChange, value, children, unlimitedWidth = false, size = "regular", ...props }: TabsProps) => {
    const [position, setPosition] = useState(0);
    const [scrollableWidth, setScrollableWidth] = useState(2);
    const [isOverFlow, setIsOverFlow] = useState(true);
    const labelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (labelRef.current) {
        labelRef?.current?.offsetWidth < labelRef?.current?.scrollWidth ? setIsOverFlow(true) : setIsOverFlow(false);
      }
      const scroller = document.getElementById("scroller");
      scroller?.addEventListener("scroll", () => {
        setPosition(scroller.scrollLeft);
        setScrollableWidth(scroller.scrollWidth - scroller.clientWidth);
      });
    });

    useEffect(() => {
      const element = document.getElementById(value);
      const scroller = document.getElementById("scroller");
      if (element && scroller) {
        scroller.scrollLeft = element.offsetLeft - scroller.offsetWidth / 2;
      }
    }, [tabs, value]);

    const scrollLeft = () => {
      const scroller = document.getElementById("scroller");
      if (!!scroller) {
        scroller.scrollLeft = scroller.scrollLeft - 400;
      }
    };
    const scrollRight = () => {
      const scroller = document.getElementById("scroller");
      if (!!scroller) {
        scroller.scrollLeft = scroller.scrollLeft + 400;
      }
    };

    return (
      <StyledTabsContainer>
        {isOverFlow ? (
          <TabsIcon onClick={scrollLeft} noIcon={position === 0 || position + 1 > scrollableWidth}>
            {position !== 0 ? <ArrowLeftIcon size={"regular"} /> : null}
          </TabsIcon>
        ) : null}
        <StyledScroller id={"scroller"} ref={labelRef}>
          <StyledTabs {...props}>
            {tabs
              ?.filter((child) => child.isShow || child.isShow === null || child.isShow === undefined)
              .map((child, index) => {
                return (
                  <StyledTab
                    id={child.id}
                    key={index}
                    size={size}
                    unlimitedWidth={unlimitedWidth}
                    active={child.id === value}
                    onClick={() => {
                      onChange(child);
                    }}
                  >
                    {child.label}
                    {(child.canDelete || false) && (
                      <OffOutlineCloseIcon
                        className={"closeIcon"}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (onDelete) onDelete(child);
                        }}
                      />
                    )}
                  </StyledTab>
                );
              })}
          </StyledTabs>
        </StyledScroller>
        {isOverFlow ? (
          <TabsIcon onClick={scrollRight} noIcon={position === 0 || position + 1 > scrollableWidth}>
            {position < scrollableWidth - 1 ? <ArrowRightIcon size={"regular"} /> : null}
          </TabsIcon>
        ) : null}
      </StyledTabsContainer>
    );
  }
);

const TabsIcon = (props: { noIcon?: boolean; onClick: () => void } & React.PropsWithChildren<{}>) => {
  const uid = useMemo(() => uuidv4(), []);
  useRippleCenter(uid);
  return <StyledIconContainer {...props} id={uid} />;
};

const StyledRippleAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1.2;
  }
  to {
    transform: scale(1.1);
    opacity: 0;
  }
`;

const StyledIconContainer = styled.div<{ noIcon?: boolean }>`
  display: inline-flex;
  justify-content: center;
  flex: none;
  position: relative;
  align-items: center;
  align-self: center;
  padding: 0;
  outline: none;
  border: none;
  height: ${(p) => p.theme.pxToRem(48)};
  width: ${(p) => p.theme.pxToRem(40)};
  color: ${(p) => p.theme.palette.ink["40"]};
  z-index: 1;

  ${({ noIcon }) => {
    if (!noIcon) {
      return css`
        .ripple {
          height: ${(p) => p.theme.pxToRem(20)};
          width: ${(p) => p.theme.pxToRem(20)};
          position: absolute;
          border-radius: 50%;
          background-color: ${(p) => p.theme.palette.primary["60"]};
          z-index: 0;
          animation: ${StyledRippleAnimation} 0.8s forwards;
        }
      `;
    }
  }}
  &:hover {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;

const StyledTabsContainer = styled.div`
  display: flex;
  background-color: white;
  justify-items: center;
  align-content: center;
  cursor: pointer;
  -moz-box-shadow: inset 0 -1px 0px 0px ${(p) => p.theme.palette.ink["30"]};
  -webkit-box-shadow: inset 0 -1px 0px 0px ${(p) => p.theme.palette.ink["30"]};
  box-shadow: inset 0 -1px 0px 0px ${(p) => p.theme.palette.ink["30"]};
`;

const StyledScroller = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  display: flex;
  box-sizing: content-box;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTab = styled.button<Pick<TabsProps, "size" | "unlimitedWidth"> & { active: boolean }>`
  display: inline-block;
  justify-content: center;
  position: relative;
  padding: ${(p) => p.theme.pxToRem(16)};
  padding-bottom: ${(p) => p.theme.pxToRem(6)};
  padding-top: ${(p) => p.theme.pxToRem(6)};
  box-sizing: border-box;
  align-items: center;
  border: none;
  border-bottom: 2px solid transparent;
  color: ${(p) => p.theme.palette.ink["60"]};
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  cursor: pointer;

  .closeIcon {
    width: ${(p) => p.theme.pxToRem(16)};
    height: ${(p) => p.theme.pxToRem(16)};
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
  }

  ${({ theme }) => theme.typography["subtitle1"]};

  ${({ size, unlimitedWidth }) => {
    let heightPx = 48;
    let widthPx = 240;
    if (size === "big") {
      heightPx = 64;
      widthPx = 320;
    }
    return css`
      height: ${(p) => p.theme.pxToRem(heightPx)};
      max-width: ${(p) => (unlimitedWidth ? "unset" : p.theme.pxToRem(widthPx))};
    `;
  }}
  &:focus-visible {
    outline: none;
  }

  ${({ size, active }) => {
    if (active) {
      if (size === "big") {
        return css`
          color: ${(p) => p.theme.palette.primary.main};
          text-transform: uppercase;
          font-weight: 500;
          font-size: ${(p) => p.theme.pxToRem(16)};
          border-bottom: 2px solid ${(p) => p.theme.palette.primary.main};

          &:hover {
            .closeIcon {
              opacity: 1;
              visibility: visible;
            }
          }
        `;
      }
      return css`
        color: ${(p) => p.theme.palette.primary.main};
        font-weight: 500;
        border-bottom: 2px solid ${(p) => p.theme.palette.primary.main};

        &:hover {
          .closeIcon {
            opacity: 1;
            visibility: visible;
          }
        }
      `;
    }
    if (size === "big") {
      return css`
        font-weight: 500;
        color: ${(p) => p.theme.palette.ink.main};
        font-size: ${(p) => p.theme.pxToRem(16)};
        text-transform: uppercase;

        &:hover {
          border-bottom: 2px solid ${(p) => p.theme.palette.ink["40"]};
          color: ${(p) => p.theme.palette.ink["60"]};
        }
        &:active {
          outline: none;
          border-bottom: 2px solid ${(p) => p.theme.palette.ink["80"]};
          color: ${(p) => p.theme.palette.ink["80"]};
        }
      `;
    }
    return css`
      &:hover {
        border-bottom: 2px solid ${(p) => p.theme.palette.ink["40"]};
        color: ${(p) => p.theme.palette.ink["60"]};
      }
      &:active {
        outline: none;
        border-bottom: 2px solid ${(p) => p.theme.palette.ink["80"]};
        color: ${(p) => p.theme.palette.ink["80"]};
      }
    `;
  }}
`;

const StyledTabs = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 0;
  outline: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.typography["subtitle1"]};
}
`;

Tabs.displayName = "Tabs";
export default memo(Tabs);
