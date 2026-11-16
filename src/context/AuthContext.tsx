import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { UserProfile } from '@/types';
import { readStorage, writeStorage } from '@/utils/storage';
interface AuthContextValue { user: UserProfile | null; loading: boolean; login: (email: string, password: string) => Promise<void>; signup: (name: string, email: string, password: string) => Promise<void>; logout: () => void; updateProfile: (updates: Partial<UserProfile>) => void; requestPasswordReset: (email: string) => Promise<void>; }
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const USERS_KEY = 'aurex_demo_users'; const SESSION_KEY = 'aurex_demo_session';
type StoredUser = UserProfile & { password: string };
export function AuthProvider({children}:{children:ReactNode}) {
 const [user,setUser] = useState<UserProfile|null>(null); const [loading,setLoading] = useState(true);
 useEffect(()=>{ const session=readStorage<string|null>(SESSION_KEY,null); const users=readStorage<StoredUser[]>(USERS_KEY,[]); if(session){const match=users.find(item=>item.id===session); if(match){const {password:_,...profile}=match; setUser(profile);}} setLoading(false); },[]);
 const login=useCallback(async(identifier:string,password:string)=>{
  const cleanIdentifier=identifier.trim();
  if(!cleanIdentifier || !password.trim()) throw new Error('Enter a username and password to continue.');
  const users=readStorage<StoredUser[]>(USERS_KEY,[]);
  const normalized=cleanIdentifier.toLowerCase();
  const match=users.find(item=>item.email.toLowerCase()===normalized || item.name.toLowerCase()===normalized);
  if(match){
   const {password:_,...profile}=match;
   setUser(profile);
   writeStorage(SESSION_KEY,profile.id);
   return;
  }
  const isEmail=cleanIdentifier.includes('@');
  const profile:StoredUser={
   id:crypto.randomUUID(),
   name:isEmail ? cleanIdentifier.split('@')[0] : cleanIdentifier,
   email:isEmail ? cleanIdentifier : `${cleanIdentifier.replace(/\s+/g,'.')}@demo.aurex`,
   timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,
   joinedAt:new Date().toISOString(),
   password:'',
  };
  writeStorage(USERS_KEY,[...users,profile]);
  const {password:_,...safeProfile}=profile;
  setUser(safeProfile);
  writeStorage(SESSION_KEY,safeProfile.id);
 },[]);
 const signup=useCallback(async(name:string,email:string,password:string)=>{const users=readStorage<StoredUser[]>(USERS_KEY,[]); if(users.some(item=>item.email.toLowerCase()===email.toLowerCase())) throw new Error('An account with this email already exists.'); const profile:StoredUser={id:crypto.randomUUID(),name,email,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,joinedAt:new Date().toISOString(),password}; writeStorage(USERS_KEY,[...users,profile]); const {password:_,...safe}=profile; setUser(safe); writeStorage(SESSION_KEY,safe.id);},[]);
 const logout=useCallback(()=>{localStorage.removeItem(SESSION_KEY);setUser(null);},[]);
 const updateProfile=useCallback((updates:Partial<UserProfile>)=>{setUser(current=>{if(!current)return current;const next={...current,...updates};const users=readStorage<StoredUser[]>(USERS_KEY,[]);writeStorage(USERS_KEY,users.map(item=>item.id===next.id?{...item,...updates}:item));return next;});},[]);
 const requestPasswordReset=useCallback(async(email:string)=>{const users=readStorage<StoredUser[]>(USERS_KEY,[]);if(!users.some(item=>item.email.toLowerCase()===email.toLowerCase()))throw new Error('No demo account was found for this email.');},[]);
 const value=useMemo(()=>({user,loading,login,signup,logout,updateProfile,requestPasswordReset}),[user,loading,login,signup,logout,updateProfile,requestPasswordReset]);
 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth(){const context=useContext(AuthContext);if(!context)throw new Error('useAuth must be used inside AuthProvider');return context;}
