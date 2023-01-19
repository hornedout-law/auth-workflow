import React, {useEffect} from 'react'
import {Outlet, Link, useNavigate} from "react-router-dom"
import { auth } from '../store/firebase'
import {useAuthStore} from "./auth.logic"

/**
 * Layout component
 * - on @authState change links for user specific and admin contents are shown
 * 
 * @returns JSX.Element()
 */

function Layout() {
  let {user, admin} = useAuthStore(state=>({user: state.user, admin:state.admin}))
  let navigateTo = useNavigate()
  useEffect(()=>{
    if(user){
      navigateTo(`/content`)
    }else if(admin){
      navigateTo("/dash")
    }
  }, [user, admin])
  return (
    <main className="w-[100vw] h-screen">
      <header className='flex flex-row w-full bg-white justify-end'>
        <nav className='basis-5/12 py-4'>
          <Link to="/" className='text-sky-700 px-4 py-2'>Login</Link>
          <Link to="/signup" className='text-sky-700 px-4 py-2'>Signup</Link>
          <Link to="/admin-login" className='text-sky-700 px-4 py-2'>Admin login</Link>
          {user?<Link to="/content" className='text-sky-700 px-4 py-2'>Content</Link>:""}
          {admin?<Link to="/dash" className='text-sky-700 px-4 py-2'>Dashboard</Link>:""}
        </nav>
      </header>
        <Outlet/>
    </main>
  )
}

export default Layout