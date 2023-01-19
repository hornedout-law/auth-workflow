import * as jsxRuntime from "react/jsx-runtime";
import { useNavigate, Link, Outlet, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";
import "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { renderToString } from "react-dom/server";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const auth = {};
let useAuthStore = create()((set) => ({
  pending: false,
  fullfilled: false,
  error: null,
  loginAdmin: async (cred) => {
    try {
      set({ pending: true, error: null, fullfilled: false });
      let response = await signInWithEmailAndPassword(
        auth,
        cred.email,
        cred.password
      );
      if (response.user) {
        let res = await fetch("/admin-login", {
          method: "POST",
          body: JSON.stringify(response.user),
          headers: {
            "Content-Type": "application/json"
          }
        });
        var data = await res.json();
      }
      set({ admin: data, fullfilled: true, pending: false });
    } catch (error) {
      set((state) => ({ error, pending: false }));
    }
  },
  loginUser: async (cred) => {
    try {
      set({ pending: true, error: null, fullfilled: false });
      let res = await signInWithEmailAndPassword(
        auth,
        cred.email,
        cred.password
      );
      set({ user: res.user, fullfilled: true, pending: false });
    } catch (error) {
      set((state) => ({ error, pending: false }));
    }
  },
  signupUser: async (cred) => {
    try {
      set({ pending: true, error: null, fullfilled: false });
      let res = await createUserWithEmailAndPassword(
        auth,
        cred.email,
        cred.password
      );
      set({ user: res.user, fullfilled: true, pending: false });
    } catch (error) {
      set((state) => ({ error, pending: false }));
    }
  },
  user: null,
  admin: null
}));
const useAuthLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let { loginAdmin, loginUser, signupUser } = useAuthStore((state) => ({ loginAdmin: state.loginAdmin, signupUser: state.signupUser, loginUser: state.loginUser }));
  let handleAdminLogin = (data) => {
    loginAdmin({ email: data == null ? void 0 : data.email, password: data == null ? void 0 : data.password });
  };
  let handleUserLogin = (data) => {
    loginUser({ email: data == null ? void 0 : data.email, password: data == null ? void 0 : data.password });
  };
  let handleUserSignup = (data) => {
    signupUser({ email: data == null ? void 0 : data.email, password: data == null ? void 0 : data.password });
  };
  return { register, handleSubmit, handleAdminLogin, handleUserLogin, handleUserSignup };
};
function Layout() {
  let { user, admin } = useAuthStore((state) => ({ user: state.user, admin: state.admin }));
  let navigateTo = useNavigate();
  useEffect(() => {
    if (user) {
      navigateTo(`/content`);
    } else if (admin) {
      navigateTo("/dash");
    }
  }, [user, admin]);
  return /* @__PURE__ */ jsxs("main", { className: "w-[100vw] h-screen", children: [
    /* @__PURE__ */ jsx("header", { className: "flex flex-row w-full bg-white justify-end", children: /* @__PURE__ */ jsxs("nav", { className: "basis-5/12 py-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sky-700 px-4 py-2", children: "Login" }),
      /* @__PURE__ */ jsx(Link, { to: "/signup", className: "text-sky-700 px-4 py-2", children: "Signup" }),
      /* @__PURE__ */ jsx(Link, { to: "/admin-login", className: "text-sky-700 px-4 py-2", children: "Admin login" }),
      user ? /* @__PURE__ */ jsx(Link, { to: "/content", className: "text-sky-700 px-4 py-2", children: "Content" }) : "",
      admin ? /* @__PURE__ */ jsx(Link, { to: "/dash", className: "text-sky-700 px-4 py-2", children: "Dashboard" }) : ""
    ] }) }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
function ErrorMessage() {
  let { error } = useAuthStore();
  return /* @__PURE__ */ jsx(Fragment, { children: error ? /* @__PURE__ */ jsx("p", { className: "text-red-600 text-3xl font-light", children: error || (error == null ? void 0 : error.message) }) : "" });
}
function UserLogin() {
  const { handleSubmit, handleUserLogin, register } = useAuthLogic();
  const { pending, fullfilled } = useAuthStore((state) => ({ pending: state.pending, fullfilled: state.fullfilled }));
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full flex flex-row items-center justify-center bg-slate-200", children: /* @__PURE__ */ jsxs("form", { action: "", className: "py-4 px-8 basis-6/12 rounded-md shadow-lg bg-white", onSubmit: handleSubmit(handleUserLogin), children: [
    /* @__PURE__ */ jsx(ErrorMessage, {}),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Username or email" }),
      /* @__PURE__ */ jsx("input", { type: "text", ...register("email"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "john doe" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Password" }),
      /* @__PURE__ */ jsx("input", { type: "password", ...register("password"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "password" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row justify-between p-2", children: [
      /* @__PURE__ */ jsx("a", { href: "signupform.html", className: "text-sky-600 font-bold", children: "Don't have an account ?" }),
      /* @__PURE__ */ jsx("input", { type: "submit", className: "basis-5/12 py-2 text-uppercase bg-sky-600 font-font text-white", value: pending ? "Loading..." : fullfilled ? "OK" : "Login" })
    ] })
  ] }) });
}
function AdminLogin() {
  const { register, handleSubmit, handleAdminLogin } = useAuthLogic();
  let { pending, fullfilled } = useAuthStore((state) => ({ pending: state.pending, fullfilled: state.fullfilled }));
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center bg-slate-200", children: [
    /* @__PURE__ */ jsx(ErrorMessage, {}),
    /* @__PURE__ */ jsxs("form", { action: "", className: "py-4 px-8 w-6/12 rounded-md shadow-lg bg-white", onSubmit: handleSubmit(handleAdminLogin), children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Username or email" }),
        /* @__PURE__ */ jsx("input", { ...register("email"), type: "text", className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "john doe" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Password" }),
        /* @__PURE__ */ jsx("input", { ...register("password"), type: "password", className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "password" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full flex flex-row justify-center p-2", children: /* @__PURE__ */ jsx("input", { type: "submit", className: "basis-5/12 py-2 text-uppercase bg-sky-600 font-font text-white", value: pending ? "Loading..." : fullfilled ? "OK" : "Login" }) })
    ] })
  ] });
}
function Content() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full flex flex-row items-center justify-center bg-slate-300 text-center ", children: /* @__PURE__ */ jsx("h1", { className: " text-5xl font-bold drop-shadow bg-white p-16 rounded-xl text-sky-700", children: "This is user specific content" }) });
}
function AdminDashboard() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full flex flex-row items-center justify-center bg-slate-300 text-center ", children: /* @__PURE__ */ jsx("h1", { className: " text-5xl font-bold drop-shadow bg-white p-16 rounded-xl text-sky-700", children: "This is Admin specific content" }) });
}
function UserSignup() {
  const { register, handleUserSignup, handleSubmit } = useAuthLogic();
  const { pending, fullfilled } = useAuthStore((state) => ({ pending: state.pending, fullfilled: state.fullfilled }));
  return /* @__PURE__ */ jsx("div", { className: "flex h-full flex-row items-center justify-center bg-slate-200 w-full", children: /* @__PURE__ */ jsxs("form", { action: "", className: "py-4 px-8 basis-6/12 rounded-md shadow-lg bg-white", onSubmit: handleSubmit(handleUserSignup), children: [
    /* @__PURE__ */ jsx(ErrorMessage, {}),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Username" }),
      /* @__PURE__ */ jsx("input", { type: "text", ...register("username"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "john doe" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Email" }),
      /* @__PURE__ */ jsx("input", { type: "text", ...register("email"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "john@doe.com" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Phone" }),
      /* @__PURE__ */ jsx("input", { type: "text", ...register("phone"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "+1221 23 334" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Password" }),
      /* @__PURE__ */ jsx("input", { type: "password", ...register("password"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "password" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-2", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", className: "font-light text-sky-900", children: "Confirm Password" }),
      /* @__PURE__ */ jsx("input", { type: "password", ...register("confirmpassword"), className: "focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500", placeholder: "password again" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row justify-between p-2", children: [
      /* @__PURE__ */ jsx("a", { href: "loginform.html", className: "text-sky-600 font-bold", children: "Already have an account ?" }),
      /* @__PURE__ */ jsx("input", { type: "submit", className: "basis-5/12 py-2 text-uppercase bg-sky-600 font-font text-white", value: pending ? "Loading..." : fullfilled ? "OK" : "Login" })
    ] })
  ] }) });
}
function App(props) {
  let Router = StaticRouter;
  let routerProps = { location: props.url ?? "/" };
  return (
    //@ts-ignore
    /* @__PURE__ */ jsx(Router, { ...routerProps, children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(UserLogin, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "signup", element: /* @__PURE__ */ jsx(UserSignup, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "admin-login", element: /* @__PURE__ */ jsx(AdminLogin, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "content", element: /* @__PURE__ */ jsx(Content, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "dash", element: /* @__PURE__ */ jsx(AdminDashboard, {}) })
    ] }) }) })
  );
}
let render = (url) => {
  return renderToString(/* @__PURE__ */ jsx(App, { url }));
};
export {
  render
};
