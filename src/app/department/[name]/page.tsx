

import { SubjectList } from "@/Components/SubjectList";


import React, { Suspense } from "react";
import { fetchdepartmentById } from "@/app/actions/adddepartment";
import Fallback from "@/Components/Fallback";

const page = async ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  const filtered = await fetchdepartmentById(params.name);
  return (
    <div className="  ">
        <Suspense fallback={<Fallback/>}>

        {filtered ? <SubjectList filtered={JSON.stringify(filtered)} />: null}
      <h1 className=" text-center p-3 text-3xl font-bold ">{filtered.name}</h1>

      <div className=" flex min-h-[80vh] flex-col items-center justify-center">
      </div>
        </Suspense>
    </div>
  );
};

export default page;
