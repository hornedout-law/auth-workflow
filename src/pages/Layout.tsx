import React, {useEffect} from 'react'
import {Outlet, Link, useNavigate} from "react-router-dom"
import { auth } from '../store/firebase'
import {useAuthLogic} from "./auth.logic"

/**
 * Layout component
 * - on @authState change links for user specific and admin contents are shown
 * 
 * @returns JSX.Element()
 */

function Layout() {
  let {authState} = useAuthLogic()
  let navigateTo = useNavigate()
  useEffect(()=>{
    if(authState.user){
      navigateTo(`/content`)
    }else if(authState.admin){
      navigateTo("/admin-dash")
    }
  }, [authState])
  return (
    <main className="w-[100vw] h-screen">
      <header className='flex flex-row w-full bg-white justify-end'>
        <nav className='basis-5/12 py-4'>
          <Link to="/" className='text-sky-700 px-4 py-2'>Login</Link>
          <Link to="/signup" className='text-sky-700 px-4 py-2'>Signup</Link>
          <Link to="/admin-login" className='text-sky-700 px-4 py-2'>Admin login</Link>
          {authState.user?<Link to="/content" className='text-sky-700 px-4 py-2'>Content</Link>:""}
          {authState.admin?<Link to="/dash" className='text-sky-700 px-4 py-2'>Dashboard</Link>:""}
        </nav>
      </header>
        <Outlet/>
    </main>
  )
}

export default Layout