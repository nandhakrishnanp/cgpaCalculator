"use client";

import React from "react";

interface GradeDropdownProps {
  value: string;
  onChange: (grade: string) => void;
}

const GRADES = ["A", "A+", "O", "B", "B+", "C", "C+"];

export const GradeDropdown: React.FC<GradeDropdownProps> = ({
  value,
  onChange,
}) => {
  return (
    <select
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="ring-2 ring-black h-10 rounded-lg my-2 px-3 text-center font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
    >
      <option value="" disabled>
        Select Grade
      </option>
      {GRADES.map((grade) => (
        <option key={grade} value={grade}>
          {grade}
        </option>
      ))}
    </select>
  );
};
