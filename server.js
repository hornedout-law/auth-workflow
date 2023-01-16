import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import process from "process";
import express from "express";
import { createServer as createViteServer } from "vite";
import { initializeApp, cert} from "firebase-admin/app"

import {getAuth} from "firebase-admin/auth"



 let admin  = initializeApp({
    credential : cert("./src/store/exp-911-firebase-adminsdk-6oxi3-d78a41bd05.json")
})

let auth = getAuth(admin)

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
    console.log(userData)
    let user = await auth.getUserByEmail(userData?.email)
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

  app.use("*", (err,req, res, next)=>{
    console.log(err)
  })

  return app
};

createServer().then((app)=>{
    app.listen(5173, ()=>{
        console.log("http://localhost:5173")
    }).on("error", (error)=>{
      console.log(error)
    })
})
