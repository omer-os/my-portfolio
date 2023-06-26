import Input from "@/components/ui/input/Input";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default {
  title: "UI/Input",
  component: Input,
};

export const Default = () => {
  const [State, usestate] = useState("option1");
  return (
    <Input
      placeholder="ipernouniop"
      State={State}
      setState={usestate}
      startIcon={<BsSearch />}
    />
  );
};
