import {useEffect} from "react";
import {useNavigate} from "@tanstack/react-router";
import {Embers} from "./Embers";
import {SealLoader} from "./SealLoader";

export function LoadingScreen(){
 const navigate=useNavigate();
 useEffect(()=>{const timer=window.setTimeout(()=>navigate({to:"/livros"}),3200);return()=>window.clearTimeout(timer)},[navigate]);
 return <main role="main" className="surface-hall relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
  <div aria-hidden className="grain-overlay pointer-events-none absolute inset-0 opacity-40"/>
  <div aria-hidden className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(75% 60% at 50% 45%, transparent 0%, oklch(0.12 0.02 48 / 75%) 100%)"}}/>
  <Embers/>
  <div aria-hidden className="pointer-events-none absolute inset-4 rounded-sm border border-gold/15 sm:inset-8"/>
  <div className="relative flex w-full max-w-xl flex-col items-center text-center">
   <p className="animate-rise-in text-[0.65rem] uppercase tracking-[0.42em] text-gold-soft/80 sm:text-xs">Anno Domini · Scriptura</p>
   <div className="mt-10 animate-rise-in [animation-delay:120ms]"><SealLoader/></div>
   <h1 className="mt-12 animate-rise-in font-display text-4xl font-light leading-tight tracking-tight text-gilded [animation-delay:220ms] sm:text-6xl">Biblioteca Bíblica</h1>
   <div aria-hidden className="mt-7 flex animate-rise-in items-center gap-3 [animation-delay:300ms]"><span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50 sm:w-20"/><span className="font-display text-base text-gold/70">✦</span><span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50 sm:w-20"/></div>
   <p role="status" aria-live="polite" className="mt-7 animate-rise-in text-sm font-light tracking-[0.18em] text-muted-foreground [animation-delay:380ms] sm:text-base">Preparando sua leitura...</p>
   <div aria-hidden className="mt-10 h-px w-48 animate-rise-in overflow-hidden bg-border [animation-delay:460ms] sm:w-64"><span className="block h-px w-1/2 animate-bar-fill" style={{backgroundImage:"var(--gradient-gold)"}}/></div>
   <p className="mt-8 max-w-xs animate-rise-in font-display text-sm italic text-muted-foreground/70 [animation-delay:540ms] sm:max-w-sm sm:text-base">Sessenta e seis livros. Uma única história.</p>
   <button onClick={()=>navigate({to:"/livros"})} className="mt-8 animate-rise-in border border-gold/25 px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.25em] text-gold/80 transition hover:bg-gold/10 [animation-delay:700ms]">Abrir biblioteca</button>
  </div>
  <footer className="relative mt-12 animate-rise-in text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground/50 [animation-delay:640ms]">Antigo & Novo Testamento</footer>
 </main>;
}