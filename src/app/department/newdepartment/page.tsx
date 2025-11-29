"use client";
import { addDepartment } from "@/app/actions/adddepartment";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const lastSubject = department[0].subjects.at(-1);
    if (lastSubject?.name !== "" && lastSubject?.credits !== "") {
      setIsSubmitting(true);
      try {
        department[0].id = `${Date.now()}`;
        await addDepartment(department);
        router.push("/department");
      } catch (error) {
        alert("Error submitting data. Please try again.");
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill all the details");
    }
  };

  const removeSubject = (index:any) => {
    if (department[0].subjects.length > 1) {
      const temp = [...department];
      temp[0].subjects.splice(index, 1);
      setDepartment(temp);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block p-6 bg-white rounded-2xl  border border-gray-200 ">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Department Details
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Help others by sharing accurate credit information ⚡
            </p>
          </div>
        </header>

        <section className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8"
          >
            {/* Department Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                Department Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Department Name & Semester
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      const temp = [...department];
                      temp[0].name = e.target.value;
                      setDepartment(temp);
                    }}
                    value={department[0].name}
                    type="text"
                    placeholder="e.g., CSE 3-Sem"
                    className="w-full h-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-50 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:bg-white focus:outline-none transition-all duration-200 hover:border-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Subjects Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 flex-1">
                  Subjects & Credits
                </h2>
              </div>

              <div className="space-y-4">
                {department[0].subjects.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            Subject Name
                          </label>
                          <input
                            required
                            onChange={(e) => {
                              const temp = [...department];
                              temp[0].subjects[index].name = e.target.value;
                              setDepartment(temp);
                            }}
                            value={department[0].subjects[index].name}
                            type="text"
                            placeholder="Enter subject name"
                            className="w-full h-10 px-3 text-gray-900 placeholder-gray-500 bg-white border-2 border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none transition-all duration-200 hover:border-gray-400"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            Credits
                          </label>
                          <input
                            required
                            onChange={(e) => {
                              const temp = [...department];
                              temp[0].subjects[index].credits = e.target.value;
                              setDepartment(temp);
                            }}
                            value={department[0].subjects[index].credits}
                            type="number"
                            min="0"
                            max="10"
                            placeholder="Enter credits"
                            className="w-full h-10 px-3 text-gray-900 placeholder-gray-500 bg-white border-2 border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none transition-all duration-200 hover:border-gray-400"
                          />
                        </div>
                      </div>

                      {department[0].subjects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSubject(index)}
                          className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200 flex-shrink-0"
                          title="Remove subject"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  const temp = [...department];
                  temp[0].subjects.push({
                    name: "",
                    credits: "",
                  });
                  setDepartment(temp);
                }}
                className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <span className="text-lg">+</span>
                Add Subject
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 bg-gray-900 text-white text-lg font-bold rounded-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Department Details"
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Page;