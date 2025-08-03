import type { ComponentType } from "react";

export type Language = 'en' | 'ar' | 'ur' | 'hi';
export type Theme = 'default' | 'golden' | 'green' | 'royal';
export type CounterMode = 'auto' | 'manual';

export type Translations = {
  [key in Language]: {
    title: string;
    footer: string;
    target: string;
    reset: string;
    virtueAndReference: string;
    switchToAuto: string;
    switchToManual: string;
    manualEntry: string;
    translation: string;
  }
}

export type Zikr = {
  id: number;
  name: string;
  translation: { [key in Language]: string };
  count: number;
  target: number;
  Icon: ComponentType<{ className?: string }>;
  virtue: { [key in Language]: string };
  hadith: string;
  hadithLink: string;
};
