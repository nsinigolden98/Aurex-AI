import type { LucideIcon } from 'lucide-react';
interface StatCardProps {label:string;value:string;change?:string;positive?:boolean;icon:LucideIcon;}
export function StatCard({label,value,change,positive=true,icon:Icon}:StatCardProps){return <div className="stat-card"><div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon size={18}/></span></div><strong>{value}</strong>{change&&<small className={positive?'positive':'negative'}>{change}</small>}</div>;}
