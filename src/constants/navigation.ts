import { Activity, AlarmClock, Bot, CalendarDays, ChartCandlestick, CircleHelp, Gauge, LayoutDashboard, ListChecks, NotebookTabs, Settings, ShieldCheck, SlidersHorizontal, Target, UserRound, WalletCards } from 'lucide-react';
export const navigationGroups = [
 { label: 'WORKSPACE', items: [
  { label: 'Overview', path: '/app/overview', icon: LayoutDashboard }, { label: 'AI Assistant', path: '/app/assistant', icon: Bot }, { label: 'Market Watch', path: '/app/markets', icon: Activity }, { label: 'Trading Signals', path: '/app/signals', icon: Target }, { label: 'Strategy Centre', path: '/app/strategies', icon: SlidersHorizontal },
 ]},
 { label: 'ANALYSIS', items: [
  { label: 'Trading Journal', path: '/app/journal', icon: NotebookTabs }, { label: 'Economic Calendar', path: '/app/calendar', icon: CalendarDays }, { label: 'Price Alerts', path: '/app/alerts', icon: AlarmClock }, { label: 'Risk Management', path: '/app/risk', icon: ShieldCheck },
 ]},
 { label: 'EXECUTION', items: [
  { label: 'MetaTrader 5', path: '/app/mt5', icon: ChartCandlestick }, { label: 'Automation Centre', path: '/app/automation', icon: Gauge }, { label: 'Backtesting', path: '/app/backtesting', icon: ListChecks },
 ]},
 { label: 'PREFERENCES', items: [ { label: 'Settings', path: '/app/settings', icon: Settings }, { label: 'Help & Support', path: '/app/support', icon: CircleHelp } ] },
];
export const accountLinks = [{label:'Profile',path:'/app/profile',icon:UserRound},{label:'Risk controls',path:'/app/risk',icon:WalletCards}];
