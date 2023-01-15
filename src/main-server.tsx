import App from "./App"
import { renderToString } from "react-dom/server"

export let render = (url: string) => {
    return renderToString(<App url={url} />)
}