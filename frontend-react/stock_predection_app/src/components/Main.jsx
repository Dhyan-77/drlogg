import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='text-white flex  justify-center items-center '>
      <div className='h-80 w-150 bg-zinc-800 mt-30 rounded-2xl  flex justify-center items-center flex-col p-10 shadow-xl shadow-blue-900'>
         <div>
            <h1 className='font-semibold text-3xl'>STOCK PORATL</h1>
         </div>
           <div className='w-[500px] text-center mt-5 '>
            <p>Welcome to Stock Portal, your all-in-one platform for tracking, analyzing, and managing your stock investments with ease. Whether you’re a beginner or a seasoned investor, our app provides real-time data, insightful analytics, and powerful tools to help you make smarter trading decisions.

 </p>
         </div>
         <div className='m-5'>
             <Link to= "/login"><button className='border-blue-500 border-2 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-2xl text-blue-400'>LOGIN</button></Link>
         </div>
      </div>
    </div>
  )
}

export default Main