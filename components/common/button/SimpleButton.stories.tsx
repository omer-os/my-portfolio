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
  children: "button",
  variant: "primary",
  endIcon: (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  ),
};

export const AButton = Template.bind({});
AButton.args = {
  children: "Google",
  variant: "secondary",
};
