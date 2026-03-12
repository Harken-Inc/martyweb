import { getProjectName } from "../../../../shared/utils/markdown";
import CakewalkPricingPage from "./CakewalkPricingPage";
import HightailPricingPage from "./HightailPricingPage";

export default function PricingPage() {
  const projectName = getProjectName();

  if (projectName === "cakewalk") {
    return <CakewalkPricingPage />;
  }

  return <HightailPricingPage />;
}
