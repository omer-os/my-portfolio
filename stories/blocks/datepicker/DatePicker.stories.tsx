import DatePicker from "@/components/blocks/datepicker/DatePicker";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";

export default {
  title: "Blocks/DatePicker",
  component: DatePicker,
};

export function DatePickerDemo() {
  const [date, setDate] = useState({
    day: "20",
    month: "10",
    year: "2021",
  });

  return (
    <DatePicker
      date={date}
      setDate={setDate}
      title="Date"
      months={["Jan", "Feb", "Mar"]}
      Trigger={
        <Button>
          {date.day} / {date.month} / {date.year}
        </Button>
      }
    />
  );
}
