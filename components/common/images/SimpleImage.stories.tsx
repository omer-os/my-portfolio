import { StoryFn } from "@storybook/react";
import SimpleImage from "./SimpleImage";

export default {
  title: "Common/Images/SimpleImage",
  component: SimpleImage,
};

const Template: StoryFn<typeof SimpleImage> = (args) => (
  <div className="relative w-[15em] h-[20em]">
    <SimpleImage {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/500/600",
  zoomable: true,
};
