import Select from "@/components/ui/select/Select";
import { StoryFn } from "@storybook/react";
import { useState } from "react";

export default {
  title: "UI/Select",
  component: Select,
};

export const Default: StoryFn<typeof Select> = (args) => {
  const [State, usestate] = useState("option1");

  return (
    <Select
      State={State}
      setState={usestate}
      options={[
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ]}
    />
  );
};
