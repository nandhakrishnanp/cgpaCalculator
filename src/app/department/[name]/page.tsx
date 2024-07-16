import { SubjectList } from '@/Components/SubjectList'
import { DepartmentsList } from '@/Constants'
import React from 'react'

const page = async({params}:{
    params:{
        name:string
    }
}) => {

   const filtered = DepartmentsList.filter((item)=>item.id===params.name)
  return (
    <div className='  '>
        <h1 className=' text-center p-3 text-3xl font-bold '>{
            filtered[0].name
        }</h1>
       
        <div  className=' flex min-h-[80vh] flex-col items-center justify-center'>
            <SubjectList filtered={filtered} />
          

                </div>
    </div>
  )
}

export default page