import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import * as IconSet from "../../assets/svgr";
import SearchBox from "../../components/SearchBox";
import Typography from "../../components/Typography";
import styled, { keyframes } from "styled-components";
import { Box, Popover } from "../../index";

export default {
  title: "General/Icons",
  argTypes: {},
} as Meta<any>;

const Icons = () => {
  const [query, setQuery] = useState("check");
  const IconArray = Object.keys(IconSet).map(function (icon: any) {
    const IconName: any = (IconSet as any)[icon];
    return IconName;
  });

  const [copied, setCopied] = useState("");
  function copyToClipboard(textToCopy: string) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      return navigator.clipboard.writeText(textToCopy);
    } else {
      // text area method
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res: any, rej: any) => {
        // here the magic happens
        document.execCommand("copy") ? res?.() : rej?.();
        textArea.remove();
      });
    }
  }
  return (
    <div>
      <SearchBoxContainer>
        <SearchBox value={query} onChange={setQuery} />
      </SearchBoxContainer>
      <StyledContainer>
        {IconArray
          ? IconArray.map((Icon: any, idx: number) => {
              if (Icon.name.slice(3).toLowerCase().includes(query.toLowerCase())) {
                return (
                  <StyledIconsContainer
                    key={idx}
                    id={`${Icon.name}`}
                    onClick={() => {
                      copyToClipboard(Icon.name.slice(3)).then(() => {
                        setCopied(Icon.name);
                      });
                    }}
                    onMouseLeave={() => setCopied("")}
                  >
                    <StyledIcons>
                      <Icon />
                    </StyledIcons>
                    <Typography width="fit-content" maxWidth="100%" noWrap>
                      {Icon.name?.slice(3)}
                    </Typography>
                  </StyledIconsContainer>
                );
              } else {
                return null;
              }
            })
          : null}
      </StyledContainer>
      <Popover
        onClose={() => setCopied("")}
        placement="bottom"
        open={!!copied}
        reference={document.getElementById(copied)}
      >
        <Box padding={3}>Đã sao chép</Box>
      </Popover>
    </div>
  );
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

const SearchBoxContainer = styled.div`
  position: sticky;
  top: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const StyledIconsContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(p) => p.theme.pxToRem(68)};
  overflow: hidden auto;
  margin: ${({ theme }) => theme.pxToRem(12)};
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  height: ${(p) => p.theme.pxToRem(67)};

  .ripple {
    height: ${(p) => p.theme.pxToRem(67)};
    width: ${(p) => p.theme.pxToRem(67)};
    position: absolute;
    border-radius: 3px;
    background-color: ${(p) => p.theme.palette.ink["40"]};
    z-index: 0;
    animation: ${StyledRippleAnimation} 0.8s forwards;
  }

  &:hover {
    background-color: ${(p) => p.theme.palette.ink["30"]};
  }

  svg {
    color: ${({ theme }) => theme.palette.primary.main};
    height: ${({ theme }) => theme.pxToRem(24)};
    width: ${({ theme }) => theme.pxToRem(24)};
  }
`;

const Template: StoryFn<typeof Icons> = () => <Icons />;

export const Basic = Template.bind({});
Basic.storyName = "Icons";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=10952%3A10951",
  },
};
