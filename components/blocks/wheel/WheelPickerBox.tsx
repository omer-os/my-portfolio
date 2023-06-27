"use client";
import { useState } from "react";
import WheelPicker from "./WheelPicker";
import Dialog from "../dialog/Dialog";

const WheelPickerBox = ({
  WheelItemsList,
  open,
  setOpen,
}: {
  WheelItemsList: any[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [SelectedNumber, setSelectedNumber] = useState(0);

  return (
    <div>
      <Dialog open={open} setOpen={setOpen}>
        <div>
          <div className="flex relative h-[10em] overflow-hidden divide-2">
            <div className="absolute left-0 z-10 w-full h-10 pointer-events-none bg-gradient-to-b from-white top-3" />
            <div className="absolute left-0 z-10 w-full h-10 pointer-events-none bg-gradient-to-t from-white bottom-3" />
            <WheelPicker
              State={SelectedNumber}
              setState={setSelectedNumber}
              list={WheelItemsList}
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 bg-zinc-200/40 rounded right-2 left-2 h-[30px] pointer-events-none"></div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default WheelPickerBox;
