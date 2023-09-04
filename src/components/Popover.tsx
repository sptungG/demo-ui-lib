import React, { Fragment, memo, MutableRefObject, PropsWithChildren, useEffect, useMemo, useState } from "react";
import ClickAwayListener from "./ClickAwayListener";
import { usePopper } from "react-popper";
import { Options, State } from "@popperjs/core/lib/types";
import { v4 as uuidv4 } from "uuid";
import styled, { CSSObject } from "styled-components";
import { Placement, PositioningStrategy } from "@popperjs/core";
import { cssSizing, Sizing } from "../theme";

export interface PopoverProps extends Sizing {
  reference: HTMLElement | MutableRefObject<any> | null | undefined;
  open: boolean;
  arrow?: boolean;
  onClose: () => void;
  ignoreCloseInside?: boolean;
  option?: Partial<Options>;
  width?: CSSObject["width"];
  placement?: Placement;
  strategy?: PositioningStrategy;
}

export interface PopoverRef {
  update: (() => Promise<Partial<State>>) | null;
}

const Popover = React.forwardRef<PopoverRef, PropsWithChildren<PopoverProps>>(
  ({ children, open, onClose, reference, option, placement, strategy, ...props }, ref) => {
    const uid = useMemo(() => `Sapo-Popover-${uuidv4()}`, []);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
    const current = ((reference as any)?.current || reference) as any as HTMLElement;

    const modifiers: any[] = [
      {
        name: "offset",
        options: {
          offset: [0, 6],
        },
      },
      {
        name: "flip",
        options: {
          allowedAutoPlacements: ["bottom"],
          altBoundary: true,
        },
      },
      {
        name: "preventOverflow",
        options: {
          mainAxis: true,
        },
      },
    ];

    if (props.arrow) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrowRef,
        },
      });
    }

    const { styles, attributes, update } = usePopper(current, popperElement, {
      modifiers: modifiers,
      placement: placement || "bottom-start",
      strategy: strategy || "absolute",
      ...option,
    });

    React.useImperativeHandle(ref, () => ({
      update: update,
    }));

    useEffect(() => {
      update?.();
    }, [open]);

    return (
      <ClickAwayListener
        onClickAway={(e: { target: any }) => {
          if (!current?.contains(e.target as any) && open) {
            onClose();
          }
        }}
        outside={document.getElementById(uid)}
      >
        {open && (
          <StyledPopper
            {...attributes.popper}
            style={{ ...styles.popper }}
            open={open}
            id={uid}
            ref={setPopperElement}
            {...props}
          >
            <Fragment>
              {props.arrow && <Arrow ref={setArrowRef} style={styles.arrow} className="arrow" />}
              {children}
            </Fragment>
          </StyledPopper>
        )}
      </ClickAwayListener>
    );
  }
);

const Arrow = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.pxToRem(8)};
  height: ${({ theme }) => theme.pxToRem(8)};
  z-index: -1;

  &:after {
    content: "";
    background-color: white;
    box-shadow: ${({ theme }) => theme.pxToRem(-1)} ${({ theme }) => theme.pxToRem(-1)}
      ${({ theme }) => theme.pxToRem(3)} rgba(168, 168, 168, 0.25);
    position: absolute;
    left: 0;
    transform: rotate(45deg);
    width: ${({ theme }) => theme.pxToRem(8)};
    height: ${({ theme }) => theme.pxToRem(8)};
  }
`;

const StyledPopper = styled.div<{ open: boolean } & Sizing>`
  opacity: ${({ open }) => !open && 0};
  visibility: ${({ open }) => !open && "hidden"};
  pointer-events: ${({ open }) => !open && "none"};
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  box-shadow: 0 ${({ theme }) => theme.pxToRem(8)} ${({ theme }) => theme.pxToRem(16)} rgba(168, 168, 168, 0.25);
  border-radius: 3px;
  background: #fff;
  box-sizing: border-box;

  ${(props) => cssSizing(props)}

  &[data-popper-placement^='bottom'] > .arrow {
    &:after {
      top: ${({ theme }) => theme.pxToRem(-4)};
      border-left: 1px solid ${({ theme }) => theme.palette.stroke};
      border-top: 1px solid ${({ theme }) => theme.palette.stroke};
      border-bottom: transparent;
      border-right: transparent;
    }
  }

  &[data-popper-placement^="top"] > .arrow {
    &:after {
      bottom: ${({ theme }) => theme.pxToRem(-4)};
      border-right: 1px solid ${({ theme }) => theme.palette.stroke};
      border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
      border-top: transparent;
      border-left: transparent;
    }
  }

  &[data-popper-placement^="left"] > .arrow {
    &:after {
      right: ${({ theme }) => theme.pxToRem(-4)};
      border-right: 1px solid ${({ theme }) => theme.palette.stroke};
      border-top: 1px solid ${({ theme }) => theme.palette.stroke};
      border-bottom: transparent;
      border-left: transparent;
    }
  }

  &[data-popper-placement^="right"] > .arrow {
    &:after {
      left: ${({ theme }) => theme.pxToRem(-4)};
      border-left: 1px solid ${({ theme }) => theme.palette.stroke};
      border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
      border-top: transparent;
      border-right: transparent;
    }
  }
`;

Popover.displayName = "Popover";
export default memo(Popover);
