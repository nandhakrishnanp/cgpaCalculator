"use client";

import { useRouter } from 'next/navigation'
import React from 'react'


const LandingPage = () => {
    const router = useRouter()
  return (
    <div className='mx-7'>
        <section className='flex flex-col my-6 min-h-screen items-center justify-center'>

          <h1 className='  text-center font-bold max-md:text-3xl text-6xl'>
            Welcome to the CGPA Calculator
          </h1>
          <p className=' text-xl font-serif'>Calculate your Grade Points on Few Clicks ⚡</p>

          <button onClick={()=>{
            router.push('/department')
          }} className=' bg-black text-xl font-serif hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-2 rounded-full'>Check Now</button>
          <div className=' max-md:gap-2 max-md:flex-col text-center max-md:my-9 my-4 max-w-[800px]  flex items-center justify-center gap-5'>

             <div className='flex flex-col p-3 w-[450px] h-[150px]   items-center justify-evenly  rounded-md  bg-gray-800 '>
                <h1 className=' text-white font-bold '>1.Select Your Department</h1>
                <p className='text-white font-serif' >
                    Choose your department from the list of departments available.
                </p>
             </div>
             <div className='flex flex-col p-3  rounded-md w-[450px] h-[150px]  items-center justify-evenly  bg-gray-800 '>
                <h1 className=' text-white font-bold '>2.Fill Out the Score </h1>
                <p className='text-white font-serif' >

                    Fill out the score you got in each course you took in the semester. 

                </p>
             </div>
             <div className='flex flex-col p-3  rounded-md w-[450px] h-[150px]  items-center justify-evenly bg-gray-800 '>
                <h1 className=' text-white font-bold '>3. Hit Calculate
                </h1>
                <p className='text-white font-serif' >
                    Hit the calculate button to get your CGPA.
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