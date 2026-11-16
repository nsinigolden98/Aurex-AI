export interface UserProfile { id: string; name: string; email: string; timezone: string; joinedAt: string; }
export type SignalDirection = 'BUY' | 'SELL';
export type SignalStatus = 'ACTIVE' | 'HIT TP' | 'STOPPED' | 'EXPIRED';
export interface TradingSignal { id: string; pair: string; direction: SignalDirection; timeframe: string; entry: number; stopLoss: number; takeProfits: number[]; confidence: number; strategy: string; rationale: string; createdAt: string; status: SignalStatus; riskReward: string; }
export interface Strategy { id: string; name: string; description: string; category: string; enabled: boolean; }
export interface PriceAlert { id: string; pair: string; condition: 'above' | 'below'; price: number; enabled: boolean; }
export interface JournalEntry { id: string; pair: string; direction: SignalDirection; result: 'WIN' | 'LOSS' | 'BREAKEVEN'; pnl: number; notes: string; date: string; }
export interface RiskSettings { riskPerTrade: number; dailyLossLimit: number; maxOpenTrades: number; maxDrawdown: number; paperTrading: boolean; }
