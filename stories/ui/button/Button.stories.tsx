import { Button } from "@/components/ui/button/Button";
import { StoryFn } from "@storybook/react";
import { BsFillAlarmFill } from "react-icons/bs";

export default {
  title: "UI/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: <BsFillAlarmFill />,
};
