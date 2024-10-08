"use client";
import { addDepartment } from "@/app/actions/adddepartment";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Page = () => {
 const router =useRouter()
  const [department, setDepartment] = useState([
    {
      name: "",
      id: "",
      subjects: [
        {
          name: "",
          credits: "",
        },
      ],
    },
  ]);

  return (
    <main>
      <header className=" mt-4 mx-2">
        <h1 className="  text-center font-bold max-md:text-3xl text-6xl">
          Fill the Details to Help Others
        </h1>
        <p className=" text-xl px-2 text-center font-serif capitalize">
          Make sure the Credit details are valid⚡
        </p>
      </header>
      <section className=" max-md:m-5 flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col items-center justify-center"
        >
          <input
            required
            onChange={(e) => {
              const temp = [...department];
              temp[0].name = e.target.value;
              setDepartment(temp);
            }}
            value={department[0].name}
            type="text"
            placeholder="Enter Department Name"
            className="ring-2 ring-black h-10 rounded-lg my-2 px-3"
          />
          <input
            required
            onChange={(e) => {
              let val = e.target.value;
              const temp = [...department];
              let newdepid = "";
              for (let i = 0; i < e.target.value.length; i++) {
                if (val[i] != " ") {
                  newdepid += val[i];
                }
              }
              temp[0].id = newdepid;
              setDepartment(temp);
            }}
            value={department[0].id}
            type="text"
            placeholder="Enter dept id eg:23cse"
            className="ring-2 ring-black h-10 rounded-lg my-2 px-3"
          />
          {department[0].subjects.map((item, index) => (
            <div key={index} className="flex max-md:flex-col  gap-4 items-center justify-center">
              <p >{index + 1}.</p>
              <input
                required
                onChange={(e) => {
                  const temp = [...department];
                  temp[0].subjects[index].name = e.target.value;
                  setDepartment(temp);
                }}
                value={department[0].subjects[index].name}
                type="text"
                placeholder="Enter Subject Name"
                className="ring-2 ring-black h-10 rounded-lg my-2 px-3"
              />
              <input
                required
                onChange={(e) => {
                  const temp = [...department];
                  temp[0].subjects[index].credits = e.target.value;
                  setDepartment(temp);
                }}
                value={department[0].subjects[index].credits}
                type="number"
                placeholder="Enter Credits"
                className="ring-2 ring-black h-10 rounded-lg my-2 px-3"
              />
            </div>
          ))}
          <button
            onClick={() => {
              const temp = [...department];
              temp[0].subjects.push({
                name: "",
                credits: "",
              });
              setDepartment(temp);
            }}
            className=" bg-black text-lg hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-3 rounded-full"
          >
            Add Subject
          </button>
          <button
            onClick={() => {
              console.log(department);
                 if(department[0].subjects.at(-1)?.name!="" && department[0].subjects.at(-1)?.credits!=""){

                   addDepartment(department);
                   router.push("/department")
                 
                 }
                 else{
                  alert("Please fill all the details")
                 }

            }}
            type="submit"
            className=" bg-black text-lg hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-3 rounded-full"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};
export default Page;
