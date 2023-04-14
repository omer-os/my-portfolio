import { StoryFn } from "@storybook/react";
import LinkTab from "./LinkTab";

export default {
  title: "Common/Tabs/LinkTab",
  component: LinkTab,
};

const Template: StoryFn<typeof LinkTab> = (args) => <LinkTab {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      name: "Home",

      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
};
