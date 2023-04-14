import SimpleButton from "./SimpleButton";
import { StoryFn } from "@storybook/react";

export default {
  title: "Common/buttons/SimpleButton",
  component: SimpleButton,
};

const Template: StoryFn<typeof SimpleButton> = (args) => (
  <SimpleButton {...args} />
);

export const LinkButton = Template.bind({});
LinkButton.args = {
  href: "https://www.google.com",
  children: "Google",
  variant: "primary",
};

export const AButton = Template.bind({});
AButton.args = {
  children: "Google",
  variant: "secondary",
};
