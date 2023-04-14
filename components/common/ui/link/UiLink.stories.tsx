import { StoryFn } from "@storybook/react";
import UiLink from "./UiLink";

export default {
  title: "NewUI/link",
  component: UiLink,
};

const Template: StoryFn<typeof UiLink> = (args) => <UiLink {...args} />;
export const link = Template.bind({});
link.args = {
  children: "Link",
};
