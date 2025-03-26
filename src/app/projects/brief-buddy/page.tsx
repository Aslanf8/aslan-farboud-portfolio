import { redirect } from "next/navigation";

export default function BriefBuddyRedirect() {
  redirect("/projects/briefbuddy");
  return null; // This won't be rendered
}
