import { StoryFn } from "@storybook/react";
import UiProjectCard from "./UiProjectCard";

export default {
  title: "newUi/cards/UiProjectCard",
  component: UiProjectCard,
};

const Template: StoryFn<typeof UiProjectCard> = (args) => (
  <UiProjectCard {...args} />
);
export const Default = Template.bind({});
Default.args = {
  project: {
    coverimage: {
      asset: {
        url: "https://randomuser.me/api/portraits/men/34.jpg",
      },
    },
    title: "Project Title",
    subtitle: "Project subtitle",
    demo: "https://google.com",
    github: "https://google.com",
    projectCategories: [],
    publishedAt: "2021-04-10T00:00:00.000Z",
    showinhome: true,
    slug: {
      current: "project-title",
    },
  },
};
