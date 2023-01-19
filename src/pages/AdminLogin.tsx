import { useAuthLogic, useAuthStore } from "./auth.logic"
import ErrorMessage from "./ErrorMessage"
import { Link } from "react-router-dom"
function AdminLogin() {
  const { register, handleSubmit, handleAdminLogin } = useAuthLogic()

  let { pending, fullfilled } = useAuthStore(state => ({ pending: state.pending, fullfilled: state.fullfilled }))
  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-slate-200'>

      <ErrorMessage />
      <form action="" className="py-4 px-8 w-6/12 rounded-md shadow-lg bg-white" onSubmit={handleSubmit(handleAdminLogin)}>
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Username or email</label>
          <input {...register("email")} type="text" className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="john doe" />
        </div>
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Password</label>
          <input {...register("password")} type="password" className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="password" />
        </div>
        <div className="w-full flex flex-row justify-center p-2">

          <input type="submit" className="basis-5/12 py-2 text-uppercase bg-sky-600 font-font text-white" value={pending ? "Loading..." : fullfilled ? "OK" : "Login"} />
        </div>
      </form>
    </div>
  )
}

export default AdminLogin