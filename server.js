import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import fs from "fs";
import express from "express";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let admin = initializeApp({
  credential: cert(
    "./src/store/exp-911-firebase-adminsdk-6oxi3-d78a41bd05.json"
  ),
});

let auth = getAuth(admin);

const __dirname = dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV == "production";

let createServer = async () => {
  let app = express();

  app.use(express.json());
  app.use("/assets", express.static(resolve(__dirname, "./dist/client/assets")))

  app.post("/admin-login", async (req, res, next) => {
    let userData = req.body;
    let user = await auth.getUserByEmail(userData?.email);
    if (!user.customClaims?.admin) {
      await auth.setCustomUserClaims(user.uid, { admin: true });
      user = await auth.getUserByEmail(userData?.email);
    }
    res.status(201).json(user);
  });

  let renderApp = async (isProd, url, vite = undefined) => {
    let template, serverEntry;
    if (isProd) {
      template = fs.readFileSync(
        resolve(__dirname, "./dist/client/index.html"),
        { encoding: "utf-8" }
      );
      serverEntry = await import(
        resolve(__dirname, "dist/server/main-server.js")
      );
    } else {
      template = await vite.transformIndexHtml(
        url,
        fs.readFileSync(resolve(__dirname, "index.html"), { encoding: "utf-8" })
      );
      serverEntry = await vite.ssrLoadModule(
        resolve(__dirname, "./src/main-server.tsx")
      );
    }
    return { template, serverEntry };
  };

  let viteDevServer = async (isProd) => {
    if (!isProd) {
      let server = await (
        await import("vite")
      ).createServer({
        server: {
          middlewareMode: true,
          hmr: true,
        },
        appType: "custom",
      });
      return server;
    } else {
      return (req, res, next) => next();
    }
  };
  let vite = await viteDevServer(isProd);
  app.use(vite.middlewares ?? vite);

  let defaultLogger = ((isProd) => isProd ? (e) => console.log(e):(e) => vite.ssrFixStacktrace(e))(isProd);

  app.use("*", async (req, res, next) => {
    let url = req.originalUrl;

    try {
      let { template, serverEntry } = await renderApp(
        isProd,
        url,
        !isProd ? viteDevServer : {}
      );
      let { render } = serverEntry;
      let html = await render(url);

      let appHtml = template.replace("<!-- ssr-output -->", html);

      res.status(200).end(appHtml);
    } catch (e) {
      defaultLogger(e);
      next(e);
    }
  });

  app.use("*", (err, req, res, next) => {
    defaultLogger(err);
  });

  return app;
};

createServer().then((app) => {
  app
    .listen(5173, () => {
      console.log("http://localhost:5173");
    })
    .on("error", (error) => {
      console.log(error);
    });
});
