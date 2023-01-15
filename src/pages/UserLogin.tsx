import React from 'react'
import {useAuthLogic} from "./auth.logic"
import ErrorMessage from './ErrorMessage'

function UserLogin() {
  const {authState, handleSubmit, handleUserLogin, register} = useAuthLogic()
  return (
    <div className='w-full h-full flex flex-row items-center justify-center bg-slate-200'>
      <form action="" className="py-4 px-8 basis-6/12 rounded-md shadow-lg bg-white" onSubmit={handleSubmit(handleUserLogin)}>
      
      <ErrorMessage error={authState.error}/>
            <div className="w-full flex flex-col p-2">
                <label htmlFor="" className="font-light text-sky-900">Username or email</label>
                <input type="text" {...register("email")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="john doe"/>
            </div>
            <div className="w-full flex flex-col p-2">
                <label htmlFor="" className="font-light text-sky-900">Password</label>
                <input type="password" {...register("password")} className="focus:border-b-2 focus:border-green-500 border border-stone-100 border-b-2 p-2 border-stone-500" placeholder="password"/>
            </div>
            <div className="w-full flex flex-row justify-between p-2">
                <a href="signupform.html" className="text-sky-600 font-bold">Don't have an account ?</a>
                <input type="submit" className="basis-5/12 py-2 text-uppercase bg-sky-600 font-font text-white" value={authState.pending?"Loading...":"Login"}/>
            </div>
        </form>
    </div>
  )
}

export default UserLogin