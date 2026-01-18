"use client";

import React from "react";

interface GradeSelectorProps {
  onGradeSelect: (grade: string) => void;
}

const GRADES = ["O", "A+", "A", "B+", "B", "C+", "C"];

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  onGradeSelect,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-3 my-4">
      <p className="text-sm font-semibold text-gray-600">Select your Grade</p>
      <div className="flex max-md:flex-col max-md:w-full  flex-wrap gap-2 justify-center max-w-md">
        {GRADES.map((grade) => (
          <button
            key={grade}
            onClick={() => onGradeSelect(grade)}
            className="px-4 py-4 md:min-w-32 font-semibold text-lg  bg-black hover:bg-black/90 text-white rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
};
