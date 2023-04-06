import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";

export default function ThemeSwitch() {
  const [selectedTheme, setSelectedTheme] = useState("system");

  return (
    <div>
      <Select.Root
        onValueChange={(value) => localStorage.setItem("theme", value)}
      >
        <Select.Trigger className="flex items-center gap-2 px-3 py-1 border rounded dark:text-zinc-400 border-zinc-800">
          <Select.Value placeholder={selectedTheme} />
          <Select.Icon>
            <BsChevronExpand />
          </Select.Icon>
        </Select.Trigger>
        <>
          <Select.Content
            align="start"
            className="z-50 p-1 text-sm bg-white rounded shadow-xl dark:bg-zinc-900"
          >
            {["light", "dark", "system"].map((i) => (
              <Select.Item
                className="min-w-[7em] rounded capitalize dark:hover:bg-zinc-800 hover:bg-zinc-300 p-2"
                value={i}
                key={i}
              >
                <Select.ItemText>{i}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </>
      </Select.Root>
    </div>
  );
}
