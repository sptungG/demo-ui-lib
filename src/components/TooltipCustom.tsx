import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";
import { Placement } from "@popperjs/core";
import { Arrow, StyledPopper, StyledPopperContainer } from "./Tooltip";

export type ToolTipTheme = "light" | "dark";
interface ITooltip {
  children?: any;
  placement: Placement;
  current: any;
  open: boolean;
  maxWidth?: string;
  interactive?: boolean;
  arrow: boolean;
  theme: ToolTipTheme;
  setOpen: (open: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
}
interface ITooltipCustom {
  children?: any;
  element: any;
  open?: boolean;
  placement?: Placement;
  maxWidth?: string;
  interactive?: boolean;
  arrow?: boolean;
  theme?: ToolTipTheme;
  onOpen?: () => void;
  onClose?: () => void;
}

const Tooltip = (props: ITooltip) => {
  const { children, placement, current, setOpen, open, onClose, onOpen, maxWidth, interactive, arrow, theme } = props;
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
  const modifiers: any[] = [
    {
      name: "offset",
      options: {
        offset: [0, 0],
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
    {
      name: "arrow",
      options: {
        element: arrowRef,
        offset: [10, 10],
      },
    },
  ];
  const referencePopper = useRef<any | null>(document.body);
  const { styles, attributes } = usePopper(current, popperElement, {
    modifiers: modifiers,
    placement: placement,
  });
  if (popperElement) referencePopper.current = popperElement;

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (current?.contains(event.target)) {
        if (onOpen && !open) {
          onOpen();
          return;
        }
        setOpen(true);
      } else if (referencePopper?.current?.contains(event.target)) {
        setOpen(!!interactive);
      } else {
        onClose ? onClose() : setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [open]);

  return createPortal(
    <StyledPopperContainer {...attributes.popper} ref={setPopperElement} style={{ ...styles.popper }}>
      {arrow && <Arrow className="arrow" ref={setArrowRef} style={styles.arrow} toolTipTheme={theme} />}
      <StyledPopper maxWidth={maxWidth || "100%"} open toolTipTheme={theme}>
        {children}
      </StyledPopper>
    </StyledPopperContainer>,
    document.querySelector("body") as any
  );
};

const TooltipCustom = memo((props: ITooltipCustom) => {
  const { children, element, onClose, onOpen, placement, maxWidth, interactive, arrow, theme } = props;
  const [open, setOpen] = useState<boolean>(props?.open === undefined ? false : props?.open);
  const reference = useRef<any | null>(document.body);
  const current = ((reference as any)?.current || reference) as any as HTMLElement;

  const handleMouseover = (e: any) => {
    reference.current = e.currentTarget;
    if (onOpen && !props?.open) {
      onOpen();
      return;
    }
    setOpen(true);
  };

  const childrenHavingOnMouseEnterFunction = React.Children.map(children, (child) => {
    return React.cloneElement(child, { onMouseEnter: handleMouseover });
  });

  return (
    <Fragment>
      {childrenHavingOnMouseEnterFunction}
      {element && (props?.open === undefined ? open : props?.open) && (
        <Tooltip
          maxWidth={maxWidth || "280px"}
          current={current}
          placement={placement || "bottom"}
          setOpen={setOpen}
          open={props?.open === undefined ? open : props?.open}
          onClose={onClose}
          onOpen={onOpen}
          interactive={interactive}
          arrow={arrow ?? true}
          theme={theme || "light"}
        >
          {element}
        </Tooltip>
      )}
    </Fragment>
  );
});

TooltipCustom.displayName = "Tooltip";
export default TooltipCustom;
