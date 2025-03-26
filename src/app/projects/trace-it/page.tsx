import { redirect } from "next/navigation";

export default function TraceitRedirect() {
  redirect("/projects/traceit");
  return null; // This won't be rendered
}
