import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/blocks/alert/Alert";

export default {
  title: "Blocks/Alert",
  component: Alert,
};

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>this is title</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque,
        eius dolor molli.
      </AlertDescription>
    </Alert>
  );
}
