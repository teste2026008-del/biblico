import {createFileRoute,Link} from "@tanstack/react-router";
import {ArrowRight,BookOpen,Search,Sparkles} from "lucide-react";
import {useMemo,useState} from "react";

type Book={name:string;testament:"Antigo Testamento"|"Novo Testamento";chapters:number;abbr:string};
const books:Book[]=[
 {name:"Gênesis",testament:"Antigo Testamento",chapters:50,abbr:"Gn"},
 {name:"Êxodo",testament:"Antigo Testamento",chapters:40,abbr:"Êx"},
 {name:"Salmos",testament:"Antigo Testamento",chapters:150,abbr:"Sl"},
 {name:"Provérbios",testament:"Antigo Testamento",chapters:31,abbr:"Pv"},
 {name:"Isaías",testament:"Antigo Testamento",chapters:66,abbr:"Is"},
 {name:"Mateus",testament:"Novo Testamento",chapters:28,abbr:"Mt"},
 {name:"João",testament:"Novo Testamento",chapters:21,abbr:"Jo"},
 {name:"Romanos",testament:"Novo Testamento",chapters:16,abbr:"Rm"},
 {name:"Apocalipse",testament:"Novo Testamento",chapters:22,abbr:"Ap"}
];
export const Route=createFileRoute("/livros")({head:()=>({meta:[
 {title:"Livros — Biblioteca Bíblica"},{name:"description",content:"Explore alguns dos livros da Bíblia."}
]}),component:BooksPage});

function BooksPage(){
 const [query,setQuery]=useState("");
 const filtered=useMemo(()=>books.filter(b=>b.name.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))),[query]);
 return <main className="surface-hall min-h-screen overflow-hidden">
  <div className="grain-overlay pointer-events-none fixed inset-0 opacity-30"/>
  <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
   <Link to="/" className="font-display text-xl text-gold sm:text-2xl">Biblioteca Bíblica</Link>
   <span className="hidden text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground sm:block">Anno Domini · Scriptura</span>
  </header>
  <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10 sm:pt-16">
   <div className="max-w-3xl animate-rise-in">
    <div className="flex items-center gap-3 text-gold-soft"><Sparkles className="h-4 w-4"/><span className="text-[0.65rem] uppercase tracking-[0.35em]">A biblioteca</span></div>
    <h1 className="mt-5 font-display text-5xl font-light leading-none text-gilded sm:text-7xl">Livros das Escrituras</h1>
    <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Uma seleção para começar sua jornada. Escolha um livro e, em breve, entre capítulo por capítulo em uma experiência de leitura contemplativa.</p>
   </div>
   <div className="mt-12 flex max-w-xl items-center gap-3 border-b border-gold/20 pb-3">
    <Search className="h-4 w-4 text-gold-soft"/>
    <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar um livro..." aria-label="Buscar um livro" className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/50"/>
   </div>
   <div className="mt-14 grid gap-10 md:grid-cols-2">
    {(["Antigo Testamento","Novo Testamento"] as const).map(testament=><section key={testament}>
      <div className="mb-5 flex items-end justify-between border-b border-gold/15 pb-3">
       <div><p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold-soft/70">{testament==="Antigo Testamento"?"Primeira aliança":"Nova aliança"}</p><h2 className="mt-1 font-display text-3xl font-light">{testament}</h2></div>
       <BookOpen className="h-5 w-5 text-gold/50"/>
      </div>
      <div className="space-y-3">
       {filtered.filter(b=>b.testament===testament).map(book=><button key={book.name} className="group flex w-full items-center gap-4 rounded-sm border border-gold/10 bg-card/45 px-4 py-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-card/80">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 font-display text-lg text-gold">{book.abbr}</span>
        <span className="min-w-0 flex-1"><span className="block font-display text-2xl font-light">{book.name}</span><span className="text-xs text-muted-foreground">{book.chapters} capítulos · leitura em breve</span></span>
        <ArrowRight className="h-4 w-4 text-gold/35 transition group-hover:translate-x-1 group-hover:text-gold"/>
       </button>)}
      </div>
    </section>)}
   </div>
   {filtered.length===0&&<p className="mt-12 text-sm text-muted-foreground">Nenhum livro encontrado.</p>}
  </section>
  <footer className="relative mx-auto max-w-6xl px-6 pb-10 text-center text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground/45 sm:px-10">Antigo & Novo Testamento · 66 livros</footer>
 </main>
}