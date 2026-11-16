import type { ReactNode } from 'react';
interface PageHeaderProps { eyebrow?: string; title: string; description?: string; action?: ReactNode; }
export function PageHeader({eyebrow,title,description,action}:PageHeaderProps){return <div className="page-header"><div><div className="eyebrow">{eyebrow??'AUREX INTELLIGENCE'}</div><h1>{title}</h1>{description&&<p>{description}</p>}</div>{action&&<div className="page-header-action">{action}</div>}</div>;}
