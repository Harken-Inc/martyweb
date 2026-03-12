import { getProjectName } from "../../../../shared/utils/markdown";
import { notFound } from "next/navigation";
import CakewalkContentPage from "./CakewalkContentPage";

export default function ContentPage() {
  const projectName = getProjectName();

  if (projectName !== "cakewalk") {
    notFound();
  }

  return <CakewalkContentPage />;
}
