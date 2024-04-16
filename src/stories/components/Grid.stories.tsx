import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Grid from "../../components/Grid";
import Typography from "../../components/Typography";

export default {
  id: "Grid",
  title: "Components/Grid",
  component: Grid,
  argTypes: {},
} as Meta<typeof Grid>;

const Template: StoryFn<typeof Grid> = (args) => (
  <Grid.type container spacing={2}>
    <Grid.type item xs={12}>
      <Typography.type align="center">xs=12</Typography.type>
    </Grid.type>
    <Grid.type item xs={5}>
      <Typography.type align="center">xs=5</Typography.type>
    </Grid.type>
    <Grid.type item xs={7}>
      <Typography.type align="center">xs=7</Typography.type>
    </Grid.type>
    <Grid.type item xs={3}>
      <Typography.type align="center">xs=3</Typography.type>
    </Grid.type>
    <Grid.type item xs={3} alignItems="center">
      <Typography.type align="center">xs=3</Typography.type>
    </Grid.type>
    <Grid.type item xs={3}>
      <Typography.type align="center">xs=3</Typography.type>
    </Grid.type>
    <Grid.type item xs={3}>
      <Typography.type align="center">xs=3</Typography.type>
    </Grid.type>
  </Grid.type>
);

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {};
Basic.parameters = {};
