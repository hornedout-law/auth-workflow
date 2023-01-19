import React from 'react'
import ErrorMessage from './ErrorMessage'
import { useAuthLogic, useAuthStore } from "./auth.logic"

function UserSignup() {
  const { register, handleUserSignup, handleSubmit } = useAuthLogic()
  const { pending, fullfilled } = useAuthStore(state => ({ pending: state.pending, fullfilled: state.fullfilled }))
  return (
    <div className='flex h-full flex-row items-center justify-center bg-slate-200 w-full'>
      <form action="" className="py-4 px-8 basis-6/12 rounded-md shadow-lg bg-white" onSubmit={handleSubmit(handleUserSignup)}>
        <ErrorMessage />
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Username</label>
          <input type="text" {...register("username")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="john doe" />
        </div>
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Email</label>
          <input type="text" {...register("email")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="john@doe.com" />
        </div>
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Phone</label>
          <input type="text" {...register("phone")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="+1221 23 334" />
        </div>
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Password</label>
          <input type="password" {...register("password")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="password" />
        </div>
        <div className="w-full flex flex-col p-2">
          <label htmlFor="" className="font-light text-sky-900">Confirm Password</label>
          <input type="password" {...register("confirmpassword")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="password again" />
        </div>
        <div className="w-full flex flex-row justify-between p-2">
          <a href="loginform.html" className="text-sky-600 font-bold">Already have an account ?</a>
          <input type="submit" className="basis-5/12 py-2 text-uppercase bg-sky-600 font-font text-white" value={pending ? "Loading..." : fullfilled ? "OK" : "Login"} />
        </div>
      </form>
    </div>
  )
}

export default UserSignup