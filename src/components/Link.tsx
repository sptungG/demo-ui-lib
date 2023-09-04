import React, { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import { cssSpacing, Spacing, TypographyVariant } from "../theme";

export interface LinkProps extends React.PropsWithChildren<{}>, Spacing {
  target?: string;
  href?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  variant?: TypographyVariant;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ ...props }, ref) => {
  return <StyledLink ref={ref} {...props} />;
});
Link.displayName = "Link";
export default memo(Link);

const StyledLink = styled.a<LinkProps>`
  text-decoration: none;
  ${({ theme, variant }) => theme.typography[variant || "body1"]};
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};

  &:hover {
    text-decoration: underline;
  }

  ${(props) => cssSpacing(props)}
`;
