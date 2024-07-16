import React from 'react'
import {DepartmentsList} from "@/Constants/index"
import Link from 'next/link'

const page = () => {
  return (
    <div >
       <div className=' min-h-screen flex flex-col items-center justify-center' >
       <h1 className='  text-center font-bold max-md:text-3xl text-6xl'>
           Select Your Department
          </h1>
          <p className=' text-xl px-2 text-center font-serif'>If your Department Not Available pls Share your Subjects Credit Details Below ⚡</p>
       <section className=' my-6'>

           {DepartmentsList&&DepartmentsList.map((item,index)=>
           (
            <Link key={index} href={`/department/${item.id}`}>
            <div className=' bg-gray-800 p-4 rounded-lg hover:cursor-pointer hover:scale-105 transition-all '>
                 <p className=' text-white '>{index+1} . {item.name}</p>
            </div>
            </Link>
           ))}
       </section>
       
       <button  className='  text-lg text-black underline hover:scale-105 transition-all duration-150 py-3 m-2 px-2 rounded-full'>Add Your Department</button>
       <p> credits will be given for the Contributor</p>
       </div>
    </div>
  )
}

export default page