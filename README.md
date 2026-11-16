# Aurex AI — Trading Intelligence Workspace

A file-by-file React + TypeScript frontend project. The folder organization and separation of pages, reusable components, layouts, contexts, hooks, services, types, data, constants and utilities are based on the supplied BlueSea Mobile project structure. No BlueSea Mobile business logic, branding or feature implementation is copied.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Main structure
```text
src/
  api/                 API client integration boundary
  components/          Reusable UI grouped by feature
    charts/             Market charts
    common/              Shared buttons, panels, headers and auth layout
    layout/              Sidebar and top navigation
    market/              Market-specific components
    signals/             Signal cards and detail views
  constants/            Navigation and app constants
  context/               Authentication and trading state
  data/                  Sample data for demo mode
  hooks/                 Reusable hooks (ready for future integration)
  layouts/               Authenticated workspace layout
  lib/                   Supporting libraries
  pages/
    auth/                Login, signup and password reset
    account/             Profile, settings, notifications, support
    workspace/           Each trading module has its own page file
  services/              External service integration boundary
  types/                 Shared TypeScript interfaces
  utils/                 Storage and helper utilities
  App.tsx                Application routing and route protection
  main.tsx               Application entry point
  styles.css             Global design system and responsive styles
```

## Demo functionality
- Browser-based sign-up, sign-in, persistent session and logout.
- Protected workspace routes.
- Signal generation workflow with pair, timeframe, direction, strategy and optional market context.
- Signal list filtering, detail inspection and JSON export.
- Strategy enable/disable controls.
- Local trading journal with create/delete entries and summary metrics.
- Price alert creation, enable/disable and deletion.
- Risk preference controls and paper-trading mode.
- MT5 connection workflow preview (no broker connection is made).
- Automation schedule preferences (no background job runs).
- Backtest configuration preview (no historical test engine runs).
- Profile, settings, notifications, support FAQ and demo request form.

## Important integration boundaries
This is a frontend demonstration, not a live trading system. Quotes and chart values are sample data. The generated signals are deterministic-style demo outputs and do not call a real AI model or calculate a verified win probability. Passwords and demo accounts are stored in browser local storage and are not suitable for production. Password reset does not send email. MT5, real-time data, economic calendar, backtesting, notifications and scheduled jobs require secure backend services. Do not connect live funds or use these demo outputs to place trades.
