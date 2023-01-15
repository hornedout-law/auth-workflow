import { fileURLToPath } from "url";
import path from "path";
import {auth} from "./src/store/admin-sdk"
import fs from "fs";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let createServer = async () => {
  let app = express();

  let vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: true,
    },
    appType: "custom",
  });

  app.use(express.json())

  app.use(vite.middlewares);

  app.post("/admin-login", async(req, res, next)=>{
    let userData = req.body
    let user = await auth.getUserByEmail(authenticatedUser?.email)
    if(!user.customClaims?.admin){
        await auth.setCustomUserClaims(user.uid, {admin: true})
        user = await auth.getUserByEmail(userData?.email)
    }
    res.status(201).json(user)
  })

  app.use("*", async (req, res, next) => {
    let url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname,"index.html"), {encoding: "utf-8"});
      template = await vite.transformIndexHtml(url, template);
      let {render} = await vite.ssrLoadModule("./src/main-server.tsx");

      let html = await render(url);

      let appHtml = template.replace("<!-- ssr-output -->", html);

      res.status(200).end(appHtml);
    } catch (e) {
        vite.ssrFixStacktrace(e)
        next(e)
    }
  });

  return app
};

createServer().then((app)=>{
    app.listen(5173, ()=>{
        console.log("http://localhost:5173")
    })
})
