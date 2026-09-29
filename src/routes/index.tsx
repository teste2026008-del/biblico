import {createFileRoute} from "@tanstack/react-router";
import {LoadingScreen} from "@/components/loading/LoadingScreen";
export const Route=createFileRoute("/")({head:()=>({meta:[
  {title:"Biblioteca Bíblica — Preparando sua leitura"},
  {name:"description",content:"Uma biblioteca contemporânea dos livros bíblicos."}
]}),component:Index});
function Index(){return <LoadingScreen/>}