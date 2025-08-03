"use client";

import { useCounterMode } from "@/contexts/counter-mode-context";
import { Button } from "@/components/ui/button";
import { Hand, PlusCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function CounterModeSwitcher() {
  const { counterMode, setCounterMode } = useCounterMode();
  const { language } = useLanguage();
  const t = translations[language];

  const toggleMode = () => {
    setCounterMode(counterMode === "auto" ? "manual" : "auto");
  };

  const isAuto = counterMode === 'auto';
  const tooltipText = isAuto ? t.switchToManual : t.switchToAuto;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={toggleMode} aria-label={tooltipText}>
            {isAuto ? (
                <PlusCircle className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Hand className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">{tooltipText}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
