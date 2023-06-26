import { Button } from "@/components/ui/button/Button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@components/ui/popover/Popover";
export default {
  title: "UI/Popover",
  component: Popover,
};

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>hello world</Button>
      </PopoverTrigger>
      <PopoverContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque
        aliquam quidem animi tempore laboriosam quos, beatae praesentium iure
        quasi id aut possimus ex natus dolor magnam placeat veritatis molestiae!
      </PopoverContent>
    </Popover>
  );
}
