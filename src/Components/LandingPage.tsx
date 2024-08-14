"use client";

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const LandingPage = () => {
  const [isLoading , setIsLoading] =useState(false)
    const router = useRouter()
  return (
    <div className='mx-7'>
         {
          isLoading&&(
            <div className=' absolute z-20 w-full h-screen flex flex-col items-center justify-center backdrop-blur-md'>
             
                <p className=' text-xl  text-white  font-mono font-bold  '>
                  Loading..
                </p>
            </div>
          )
         }
        <section className='flex flex-col my-6 min-h-screen items-center justify-center'>

          <h1 className='  text-center font-bold max-md:text-3xl text-6xl'>
            Welcome to the CGPA Calculator
          </h1>
          <p className=' text-center text-xl font-serif'>Calculate your Grade Points on Few Clicks ⚡</p>

          <button onClick={()=>{
            setIsLoading(true)
            router.push('/department')
          }} className=' bg-black text-xl font-serif hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-2 rounded-full'>Check Now</button>
          <div className=' max-md:gap-2 max-md:m-2  text-center max-md:my-9 my-4 max-w-[800px]  flex items-center justify-center gap-5'>

             <div className='flex  flex-col p-3  max-md:w-[90%] md:w-[450px] h-[150px]   items-center justify-evenly  rounded-md  bg-gray-800 '>
                <h1 className=' text-white font-bold '>1.Select Your Department</h1>
                <p className='text-white max-md:text-xs p-1 font-serif' >
                    Choose your department from the list .
                </p>
             </div>
             <div className='flex flex-col p-3  max-md:w-[90%]  rounded-md w-[450px] h-[150px]  items-center justify-evenly  bg-gray-800 '>
                <h1 className=' text-white font-bold '>2.Fill Out the Score </h1>
                <p className='text-white  max-md:text-xs font-serif' >

                    Fill out the Grade you got in each course. 

                </p>
             </div>
             <div className='flex flex-col p-3 max-md:w-[90%]  rounded-md w-[450px] h-[150px]  items-center justify-evenly bg-gray-800 '>
                <h1 className=' text-white font-bold '>3. Hit Calculate
                </h1>
                <p className='text-white max-md:text-xs font-serif' >
                    Hit the calculate button to get your CGP.
                </p>
             </div>
          </div>
        </section>
        <section>
        </section>
    </div>
  )
}

export default LandingPage