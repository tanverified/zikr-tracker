"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { CounterMode } from '@/lib/types';

interface CounterModeContextType {
  counterMode: CounterMode;
  setCounterMode: (mode: CounterMode) => void;
}

const CounterModeContext = createContext<CounterModeContextType | undefined>(undefined);

export function CounterModeProvider({ children }: { children: ReactNode }) {
  const [counterMode, setCounterModeState] = useState<CounterMode>('manual');

  useEffect(() => {
    const storedMode = localStorage.getItem('zikr-app-counter-mode') as CounterMode | null;
    if (storedMode) {
      setCounterModeState(storedMode);
    }
  }, []);

  const setCounterMode = (newMode: CounterMode) => {
    setCounterModeState(newMode);
    localStorage.setItem('zikr-app-counter-mode', newMode);
  };

  return (
    <CounterModeContext.Provider value={{ counterMode, setCounterMode }}>
      {children}
    </CounterModeContext.Provider>
  );
}

export function useCounterMode() {
  const context = useContext(CounterModeContext);
  if (context === undefined) {
    throw new Error('useCounterMode must be used within a CounterModeProvider');
  }
  return context;
}
