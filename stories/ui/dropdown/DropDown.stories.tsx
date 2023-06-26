import { Button } from "@/components/ui/button/Button";
import DropDown from "@/components/ui/dropdown/DropDown";

export default {
  title: "UI/DropDown",
  component: DropDown,
};

export const Main = () => (
  <div className=" w-max">
    <DropDown
      width="2em"
      trigger={<Button variant={"ghost"}>Click Me</Button>}
    >
      <div className="w-[20em]">
        <div className="!min-w-20 !h-20 bg-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic
          doloribus earum necessitatibus praesentium nisi aspernatur doloremque,
          dolorum, iure cumque similique commodi. Minima officia ducimus
          corrupti quod soluta minus totam!
        </div>
      </div>
    </DropDown>
  </div>
);
