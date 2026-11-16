import type { JournalEntry, PriceAlert, RiskSettings, Strategy, TradingSignal } from '@/types';
export const initialSignals: TradingSignal[] = [
 {id:'AX-2048',pair:'EUR/USD',direction:'BUY',timeframe:'1H',entry:1.0832,stopLoss:1.0798,takeProfits:[1.087,1.091],confidence:82,strategy:'Trend + RSI confirmation',rationale:'Higher-timeframe structure remains bullish. Price reclaimed the 20 EMA and RSI momentum is recovering above its midline. Wait for a confirmed retest before entry.',createdAt:'Today, 09:42',status:'ACTIVE',riskReward:'1:2.3'},
 {id:'AX-2047',pair:'XAU/USD',direction:'SELL',timeframe:'4H',entry:2038.5,stopLoss:2051,takeProfits:[2024,2012],confidence:76,strategy:'Supply zone rejection',rationale:'Price rejected a prior supply zone with weakening momentum. A lower high is forming; confirmation is required before execution.',createdAt:'Today, 08:16',status:'ACTIVE',riskReward:'1:1.9'},
 {id:'AX-2041',pair:'GBP/USD',direction:'BUY',timeframe:'30M',entry:1.261,stopLoss:1.257,takeProfits:[1.266,1.269],confidence:71,strategy:'Breakout retest',rationale:'Prior resistance has been reclaimed and is being tested as support.',createdAt:'Yesterday, 15:30',status:'HIT TP',riskReward:'1:2.0'},
];
export const initialStrategies: Strategy[] = [
 {id:'s1',name:'Trend following',description:'Identify directional bias using moving averages and market structure.',category:'Trend',enabled:true},
 {id:'s2',name:'RSI divergence',description:'Look for momentum divergence around key support and resistance.',category:'Momentum',enabled:true},
 {id:'s3',name:'Breakout retest',description:'Wait for a confirmed breakout and retest of a key price level.',category:'Price action',enabled:true},
 {id:'s4',name:'Supply & demand',description:'Map institutional zones and evaluate rejection or continuation.',category:'Price action',enabled:false},
 {id:'s5',name:'Moving average crossover',description:'Use fast and slow moving-average alignment for trend shifts.',category:'Trend',enabled:false},
];
export const initialAlerts: PriceAlert[] = [{id:'a1',pair:'EUR/USD',condition:'above',price:1.09,enabled:true},{id:'a2',pair:'XAU/USD',condition:'below',price:2010,enabled:false}];
export const initialJournal: JournalEntry[] = [{id:'j1',pair:'GBP/USD',direction:'BUY',result:'WIN',pnl:42.5,notes:'Waited for retest confirmation.',date:'Nov 13, 2026'},{id:'j2',pair:'EUR/USD',direction:'SELL',result:'LOSS',pnl:-18,notes:'Entered before candle close.',date:'Nov 12, 2026'}];
export const defaultRisk: RiskSettings = {riskPerTrade:1,dailyLossLimit:3,maxOpenTrades:3,maxDrawdown:8,paperTrading:true};
