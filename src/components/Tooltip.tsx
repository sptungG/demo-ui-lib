import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";
import { createContext } from "use-context-selector";
import { isEmpty, isNil } from "lodash";
import { Placement } from "@popperjs/core";
import { ToolTipTheme } from "./TooltipCustom";

interface TooltipState {
  rebuild: () => void;
}

const initState: TooltipState = {
  rebuild: () => {},
};

export const TooltipContext = createContext<TooltipState>(initState);
const { Provider } = TooltipContext;

interface TooltipProviderProps extends React.PropsWithChildren<{}> {}

export const TooltipProvider = memo(({ children }: TooltipProviderProps) => {
  const [uid, setUid] = useState(uuidv4());
  const rebuild = useCallback(() => setUid(uuidv4()), []);
  const valueProvider = useMemo<TooltipState>(() => ({ rebuild }), [rebuild]);
  return (
    <Provider value={valueProvider}>
      {children}
      <Tooltip id={uid} />
    </Provider>
  );
});

const Tooltip = ({ id }: { id: string }) => {
  const [text, setText] = useState("");
  const [placement, setPlacement] = useState<Placement>("bottom");
  const [open, setOpen] = useState(false);
  const reference = useRef<any | null>(document.body);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
  const current = ((reference as any)?.current || reference) as any as HTMLElement;
  const modifiers: any[] = [
    {
      name: "offset",
      options: {
        offset: [0, 4],
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

  const { styles, attributes } = usePopper(current, popperElement, {
    modifiers: modifiers,
    placement: placement,
  });

  useEffect(() => {
    const handleMouseover = (e: any) => {
      let text = e.target?.getAttribute?.("data-tip");
      let placement = e.target?.getAttribute?.("data-tip-placement") || "bottom";
      if (isNil(text) || isEmpty(text)) return;
      reference.current = e.target;
      setPlacement(placement);
      setText(text);
      setOpen(true);
    };
    const handleBlur = () => {
      setOpen(false);
    };
    const elements = document.querySelectorAll("[data-tip]");
    elements.forEach((element) => {
      const label = element.getAttribute("data-tip");
      if (!label) return;
      element.addEventListener("mouseenter", handleMouseover);
      element.addEventListener("mouseleave", handleBlur);
      // if (element.tagName === "A" || element.tagName === "a") {
      element.addEventListener("click", handleBlur);
      // }
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseover);
        element.addEventListener("mouseleave", handleBlur);
      });
    };
  }, [id]);

  if (!open) return null;

  return createPortal(
    <StyledPopper
      toolTipTheme="dark"
      {...attributes.popper}
      style={{ ...styles.popper }}
      open={open}
      id={id}
      ref={setPopperElement}
    >
      <Arrow toolTipTheme="dark" className="arrow" ref={setArrowRef} style={styles.arrow} />
      {text}
    </StyledPopper>,
    document.querySelector("body") as any
  );
};

export const Arrow = styled.div<{ toolTipTheme: ToolTipTheme }>`
  position: absolute;
  width: ${({ theme }) => theme.pxToRem(10)};
  height: ${({ theme }) => theme.pxToRem(10)};
  box-sizing: border-box;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    background: ${({ toolTipTheme }) => (toolTipTheme === "light" ? "#fff" : "#243041")};
    border: 1px solid ${({ theme, toolTipTheme }) => (toolTipTheme === "light" ? theme.palette.stroke : "#243041")};
    transform: rotate(45deg);
    width: ${({ theme }) => theme.pxToRem(8)};
    height: ${({ theme }) => theme.pxToRem(8)};
    box-sizing: border-box;
  }

,
`;

export const StyledPopper = styled.div<{
  open: boolean;
  maxWidth?: string;
  toolTipTheme: ToolTipTheme;
}>`
  ${({ theme }) => theme.typography["subtitle2"]};
  font-size:  ${({ theme }) => theme.pxToRem(12)};
  font-weight: 400;
  opacity: ${({ open }) => !open && 0};
  box-sizing: border-box;
  visibility: ${({ open }) => !open && "hidden"};
  pointer-events: ${({ open }) => !open && "none"};
  z-index: 18000;
  border: 1px solid ${({ theme, toolTipTheme }) => (toolTipTheme === "light" ? theme.palette.stroke : "#243041")};
  box-shadow: 0 2px ${({ theme }) => theme.pxToRem(4)} rgba(168, 168, 168, 0.25);
  border-radius: 6px;
  background: ${({ toolTipTheme }) => (toolTipTheme === "light" ? "#fff" : "#243041")};
  max-width: ${({ theme, maxWidth }) => (maxWidth ? maxWidth : theme.pxToRem(220))};
  padding: ${({ theme }) => theme.pxToRem(12)} ${({ theme }) => theme.pxToRem(12)};
  word-break: break-word;
  color: ${({ toolTipTheme }) => (toolTipTheme === "light" ? "#0F1824" : "#fff")};

  &[data-popper-placement^='bottom'] > .arrow {
    top: -5px;

    &:after {
      border-bottom: transparent;
      border-right: transparent;
    }
  }

  &[data-popper-placement^='top'] > .arrow {
    bottom: -7px;

    &:after {
      border-top: transparent;
      border-left: transparent;
    }
  }


  &[data-popper-placement^='left'] > .arrow {
    right: -7px;

    &:after {
      border-bottom: transparent;
      border-left: transparent;
    }
  }


  &[data-popper-placement^='right'] > .arrow {
    left: -5px;

    &:after {
      border-top: transparent;
      border-right: transparent;
    }
  }

,
`;
export const StyledPopperContainer = styled.div`
  z-index: 18000;

  &[data-popper-placement^='bottom'] ${StyledPopper} {
    margin-top: 7px;
  }

  &[data-popper-placement^='top'] ${StyledPopper} {
    margin-bottom: 7px;
  }

  &[data-popper-placement^='left'] ${StyledPopper} {
    margin-right: 7px;
  }

  &[data-popper-placement^='right'] ${StyledPopper} {
    margin-left: 7px;
  }

  &[data-popper-placement^='bottom'] > .arrow {
    top: 3px;

    &:after {
      border-bottom: transparent;
      border-right: transparent;
    }
  }

  &[data-popper-placement^='top'] > .arrow {
    bottom: 1px;

    &:after {
      border-top: transparent;
      border-left: transparent;
    }
  }


  &[data-popper-placement^='left'] > .arrow {
    right: 1px;

    &:after {
      border-bottom: transparent;
      border-left: transparent;
    }
  }


  &[data-popper-placement^='right'] > .arrow {
    left: 3px;

    &:after {
      border-top: transparent;
      border-right: transparent;
    }
  }

,
`;
