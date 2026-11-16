import type { TradingSignal } from '@/types';
import { apiRequest } from '@/api/client';
/** Backend adapter boundary for future real signal generation. */
export const tradingService = {
  generateSignal: (payload: { pair: string; timeframe: string; strategy: string; context?: string }) => apiRequest<TradingSignal>('/signals/generate', { method: 'POST', body: JSON.stringify(payload) }),
  listSignals: () => apiRequest<TradingSignal[]>('/signals'),
};
