import { redirect } from "next/navigation";
import { founderLinks } from "../../src/brand";

export default function AfterHoursRedirect() {
  redirect(`${founderLinks.portfolio}#after-hours`);
}
