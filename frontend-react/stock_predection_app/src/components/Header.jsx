import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between items-center bg-zinc-800 p-2 text-white'>
       <div>
        <h1 className='text-3xl'>LOGIN PORTAL</h1>
       </div>

        <div className='flex gap-5 '>
        <Link to= "/login"><button className='border-blue-400 border-2 px-4 py-2 rounded-2xl text-blue-400'>LOGIN</button></Link>

        <Link to="/signup"><button className='border-blue-500 border-2 text-zinc-800 px-4 py-2 rounded-2xl bg-blue-500'>SIGNUP</button></Link>
       </div>

    </div>
  )
}

export default Header