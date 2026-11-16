import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
export function AuthenticatedLayout(){const [menuOpen,setMenuOpen]=useState(false);return <div className="app-shell"><Sidebar open={menuOpen} onClose={()=>setMenuOpen(false)}/><div className="main-column"><Topbar onMenu={()=>setMenuOpen(true)}/><main className="main-content"><Outlet/></main><footer className="app-footer"><span>© 2026 Aurex AI</span><span>Market research workspace · Demo mode</span></footer></div></div>;}
