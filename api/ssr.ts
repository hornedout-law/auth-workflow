import {VercelRequest, VercelResponse} from "@vercel/node"
import {render} from "../src/main-server"
import { readFileSync } from "fs";
import {resolve} from "path"

export default async (req: VercelRequest, res: VercelResponse) => {
    let url = req.url;
    try {
        let template = readFileSync(
            resolve(__dirname, "../dist/index.html"),
            { encoding: "utf-8" }
          );
      let html = render(url as string);

      let appHtml = template.replace("<!-- ssr-output -->", html);

      res.status(200).end(appHtml);
    } catch (e) {
      console.log(e);
    }
  };
