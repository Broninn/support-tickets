import { routes } from "../routes/index.js";

export function routeHandler(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url;
  });

  if(route){
    return route.controller(req, res);
  }else{
    res.writeHead(404).end("Rota não encontrada");
  }
}
