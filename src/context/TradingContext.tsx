import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { JournalEntry, PriceAlert, RiskSettings, Strategy, TradingSignal } from '@/types';
import { defaultRisk, initialAlerts, initialJournal, initialSignals, initialStrategies } from '@/data/initialData';
import { readStorage, writeStorage } from '@/utils/storage';
interface TradingContextValue {signals:TradingSignal[];setSignals:(value:TradingSignal[]|((current:TradingSignal[])=>TradingSignal[]))=>void;strategies:Strategy[];setStrategies:(value:Strategy[]|((current:Strategy[])=>Strategy[]))=>void;alerts:PriceAlert[];setAlerts:(value:PriceAlert[]|((current:PriceAlert[])=>PriceAlert[]))=>void;journal:JournalEntry[];setJournal:(value:JournalEntry[]|((current:JournalEntry[])=>JournalEntry[]))=>void;risk:RiskSettings;setRisk:(value:RiskSettings)=>void;}
const TradingContext=createContext<TradingContextValue|undefined>(undefined);
export function TradingProvider({children}:{children:ReactNode}){
 const [signals,setSignals]=useState(()=>readStorage('aurex_signals',initialSignals));const [strategies,setStrategies]=useState(()=>readStorage('aurex_strategies',initialStrategies));const [alerts,setAlerts]=useState(()=>readStorage('aurex_alerts',initialAlerts));const [journal,setJournal]=useState(()=>readStorage('aurex_journal',initialJournal));const [risk,setRisk]=useState(()=>readStorage('aurex_risk',defaultRisk));
 useEffect(()=>writeStorage('aurex_signals',signals),[signals]);useEffect(()=>writeStorage('aurex_strategies',strategies),[strategies]);useEffect(()=>writeStorage('aurex_alerts',alerts),[alerts]);useEffect(()=>writeStorage('aurex_journal',journal),[journal]);useEffect(()=>writeStorage('aurex_risk',risk),[risk]);
 const value=useMemo(()=>({signals,setSignals,strategies,setStrategies,alerts,setAlerts,journal,setJournal,risk,setRisk}),[signals,strategies,alerts,journal,risk]);return <TradingContext.Provider value={value}>{children}</TradingContext.Provider>;
}
export function useTrading(){const context=useContext(TradingContext);if(!context)throw new Error('useTrading must be used inside TradingProvider');return context;}
