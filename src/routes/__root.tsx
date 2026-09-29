import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet,Link,createRootRouteWithContext,HeadContent,Scripts,useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFoundComponent(){
  return <div className="flex min-h-screen items-center justify-center bg-background px-4">
    <div className="text-center"><p className="font-display text-7xl text-gold">404</p><h1 className="mt-3 font-display text-3xl">Página não encontrada</h1>
    <Link to="/" className="mt-6 inline-flex rounded-sm border border-gold/25 px-5 py-3 text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold/10">Voltar</Link></div>
  </div>;
}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){
  const router=useRouter();
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center">
    <p className="font-display text-3xl text-gold">Algo não carregou</p><p className="mt-3 text-sm text-muted-foreground">Tente novamente para continuar a leitura.</p>
    <button onClick={()=>{router.invalidate();reset();}} className="mt-6 rounded-sm bg-gold px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink">Tentar novamente</button>
  </div></div>;
}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
  head:()=>({meta:[
    {charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},
    {title:"Biblioteca Bíblica"},{name:"description",content:"Uma biblioteca contemporânea dos livros bíblicos."},
    {property:"og:title",content:"Biblioteca Bíblica"},{property:"og:description",content:"Sessenta e seis livros. Uma única história."}
  ],links:[
    {rel:"stylesheet",href:appCss},
    {rel:"preconnect",href:"https://fonts.googleapis.com"},
    {rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},
    {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Karla:wght@300;400;500&display=swap"}
  ]}),
  shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}