"use client"

import type { ChangeEvent } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Info, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import type { Zikr } from "@/lib/types";
import { useCounterMode } from "@/contexts/counter-mode-context";


interface ZikrCardProps {
  zikr: Zikr;
  onIncrement: () => void;
  onReset: () => void;
  onTargetChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCountChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ZikrCard({ zikr, onIncrement, onReset, onTargetChange, onCountChange }: ZikrCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const { counterMode } = useCounterMode();

  const { id, name, count, target, Icon, hadith, hadithLink } = zikr;
  const translationText = zikr.translation[language];
  const virtueText = zikr.virtue[language];

  const progress = target > 0 ? Math.min((count / target) * 100, 100) : 0;
  const isTargetReached = progress >= 100;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-2 border-transparent data-[completed=true]:border-accent" data-completed={isTargetReached}>
      <CardHeader className="text-center bg-card p-6">
        <div className="mx-auto bg-primary/10 p-3 rounded-full mb-3 w-fit">
            <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl lg:text-2xl text-primary leading-relaxed tracking-wide font-arabic">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center p-6 gap-6 bg-slate-50 dark:bg-card">
        {counterMode === 'auto' ? (
          <div 
            className="relative w-48 h-48 flex items-center justify-center cursor-pointer group shrink-0"
            onClick={onIncrement}
            role="button"
            aria-label={`Increment count for ${name}`}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onIncrement()}
          >
            <div className="absolute inset-0 bg-primary rounded-full transition-transform duration-300 group-hover:scale-105 group-active:scale-100 shadow-lg"></div>
            <span className="relative text-6xl font-bold font-mono text-primary-foreground select-none">
              {count}
            </span>
          </div>
        ) : (
          <div className="w-48 h-48 flex items-center justify-center shrink-0">
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor={`manual-count-${id}`} className="text-sm text-muted-foreground">{t.manualEntry}</Label>
              <Input
                id={`manual-count-${id}`}
                type="number"
                value={count}
                onChange={onCountChange}
                className="w-32 text-center text-4xl h-20 font-mono"
                min="0"
                aria-label={`Current count for ${name}`}
              />
            </div>
          </div>
        )}
        <div className="w-full space-y-2 pt-4">
           <Progress value={progress} className={cn("h-3", isTargetReached && "[&>div]:bg-accent")} />
           <div className="flex justify-between text-xs text-muted-foreground">
             <span>{count}</span>
             <span>{t.target}: {target}</span>
           </div>
        </div>
        
        <div className="text-sm text-center font-body italic text-muted-foreground p-2 bg-background rounded-md w-full">
            <p>{translationText}</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-sm text-muted-foreground py-2 hover:no-underline justify-center">
                <Info className="h-4 w-4 mx-2"/>
                {t.virtueAndReference}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-center text-muted-foreground p-2 bg-background rounded-md">
              <p className="font-semibold">{virtueText}</p>
              <a href={hadithLink} target="_blank" rel="noopener noreferrer" className="text-xs italic mt-1 hover:underline text-primary/80 flex items-center justify-center gap-1">
                {hadith} <ExternalLink className="h-3 w-3" />
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="bg-muted/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Label htmlFor={`target-${id}`} className="whitespace-nowrap text-sm">{t.target}:</Label>
          <Input 
            id={`target-${id}`} 
            type="number" 
            value={target} 
            onChange={onTargetChange} 
            className="w-full sm:w-24"
            min="0"
          />
        </div>
        <Button variant="ghost" size="sm" onClick={onReset} className="w-full sm:w-auto text-muted-foreground hover:text-destructive hover:bg-destructive/10">
          <RotateCcw className="mr-2 h-4 w-4" /> {t.reset}
        </Button>
      </CardFooter>
    </Card>
  );
}
