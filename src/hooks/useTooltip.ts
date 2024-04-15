import { useContextSelector } from "use-context-selector";
import { TooltipContext } from "../components/Tooltip";

const useTooltip = () => {
  return useContextSelector(TooltipContext, (v) => v.rebuild);
};

export default useTooltip;
