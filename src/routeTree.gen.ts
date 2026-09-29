/* eslint-disable */
/* @ts-nocheck */
import {Route as rootRouteImport} from "./routes/__root";
import {Route as IndexRouteImport} from "./routes/index";
import {Route as LivrosRouteImport} from "./routes/livros";

const IndexRoute=IndexRouteImport.update({id:"/",path:"/",getParentRoute:()=>rootRouteImport} as any);
const LivrosRoute=LivrosRouteImport.update({id:"/livros",path:"/livros",getParentRoute:()=>rootRouteImport} as any);
export interface FileRoutesByFullPath {"/":typeof IndexRoute;"/livros":typeof LivrosRoute}
export interface FileRoutesByTo {"/":typeof IndexRoute;"/livros":typeof LivrosRoute}
export interface FileRoutesById {"__root__":typeof rootRouteImport;"/":typeof IndexRoute;"/livros":typeof LivrosRoute}
export interface FileRouteTypes {fileRoutesByFullPath:FileRoutesByFullPath;fullPaths:"/"|"/livros";fileRoutesByTo:FileRoutesByTo;to:"/"|"/livros";id:"__root__"|"/"|"/livros";fileRoutesById:FileRoutesById}
export interface RootRouteChildren {IndexRoute:typeof IndexRoute;LivrosRoute:typeof LivrosRoute}
declare module "@tanstack/react-router" {interface FileRoutesByPath {
 "/":{id:"/";path:"/";fullPath:"/";preLoaderRoute:typeof IndexRouteImport;parentRoute:typeof rootRouteImport};
 "/livros":{id:"/livros";path:"/livros";fullPath:"/livros";preLoaderRoute:typeof LivrosRouteImport;parentRoute:typeof rootRouteImport};
}}
const rootRouteChildren:RootRouteChildren={IndexRoute,LivrosRoute};
export const routeTree=rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();
import type {getRouter} from "./router.tsx";
import type {startInstance} from "./start.ts";
declare module "@tanstack/react-start" {interface Register {ssr:true;router:Awaited<ReturnType<typeof getRouter>>;config:Awaited<ReturnType<typeof startInstance.getOptions>>}}
