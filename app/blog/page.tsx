import { redirect } from "next/navigation";

export default function page() {
  return redirect("/blog/all");
}
