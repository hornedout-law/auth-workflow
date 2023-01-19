import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StaticRouter } from "react-router-dom/server"

// import pages
import Layout from "./pages/Layout"
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Content from "./pages/Content";
import AdminDashboard from "./pages/AdminDashboard";
import UserSignup from "./pages/UserSignup";

function App(props: AppProps) {
  let Router = import.meta.env.SSR?StaticRouter:BrowserRouter
  let routerProps = import.meta.env.SSR?{location: props.url??"/"}:{}

  return (
    //@ts-ignore
      <Router {...routerProps}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<UserLogin/>}/>
            <Route path="signup" element={<UserSignup/>}/>
            <Route path="admin-login" element={<AdminLogin/>}/>
            <Route path="content" element={<Content/>}/>
            <Route path="dash" element={<AdminDashboard/>}/>
          </Route>
        </Routes>
      </Router>

  )
}

type AppProps = {
  url?:string,

}

export default App
