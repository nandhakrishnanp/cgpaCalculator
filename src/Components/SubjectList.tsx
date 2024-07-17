"use client";

import React, { useEffect, useState } from "react";

export const SubjectList = ({ filtered }: any) => {
    const filtered1 = JSON.parse(filtered)
    
    
  const subjectArray = filtered1.subjects;
  const creditArray = subjectArray.map((item: any) => {
    return {
      name: item.name,
      credits: item.credits,
      grade: "",
    };
  });
  const [credits, setCredits] = useState(creditArray);
  const [isGenerated, setIsGenerated] = useState(false);
  const [cgpa, setCgpa] = useState(0);
  const [index, setIndex] = useState(0);
  const handleCalculate = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    credits.every((item: any) => {
      if (item.grade === "O") {
        totalPoints += 10 * item.credits;
      } else if (item.grade === "A+") {
        totalPoints += 9 * item.credits;
      } else if (item.grade === "A") {
        totalPoints += 8 * item.credits;
      } else if (item.grade === "B+") {
        totalPoints += 7 * item.credits;
      } else if (item.grade === "B") {
        totalPoints += 6 * item.credits;
      } else if (item.grade === "C") {
        totalPoints += 5 * item.credits;
      } else {
        totalCredits = -1;
        return false;
      }
      totalCredits += item.credits;
      return true;
    });
    if (!totalPoints) {
      alert("Please Enter Valid Grades");
      setIndex(0);
      setIsGenerated(false);
    } else {
      const cgpa = totalPoints / totalCredits;
      setCgpa(cgpa);
      setIsGenerated(true);
    }
  };

  function getCGPAMessage(cgpa: number) {
    if (cgpa >= 8) {
      return "You're a genius! Did Einstein leave you his brain?";
    } else if (cgpa >= 7) {
      return "Great job! You're the superstar of the class!";
    } else if (cgpa >= 6) {
      return "Not bad! You're cruising along nicely.";
    } else if (cgpa >= 5) {
      return "You're getting there! Time to hit the books a bit more.";
    } else {
      return "Uh oh! Looks like it's time for a serious study session. Coffee, anyone?";
    }
  }

  return (
    <>
      {" "}
      {!isGenerated ? (
        <>
          <p>
            {index + 1}/{credits.length}
          </p>
          <div
            className="   m-2  rounded-lg bg-white md:shadow-xl flex flex-col p-10 md:p-20 max-md:w-full  my-2 items-center justify-evenly"
            key={index}
          >
            <h1 className=" font-semibold text-2xl ">{credits[index].name}</h1>
            <p className=" text-center px-3 ">
              {credits[index].credits} Credits
            </p>
            <input
              required
              onChange={(e) => {
                const temp = [...credits];
                temp[index].grade = e.target.value.toUpperCase();
                setCredits(temp);
                console.log(credits);
              }}
              value={credits[index].grade}
              type="text"
              placeholder="Enter Grade eg: A , O "
              className=" uppercase ring-2 ring-black h-10 rounded-lg my-2 px-3 "
            />
            <div className=" py-2">
              <button
                onClick={() => {
                  setIndex(0);
                  setCredits(creditArray);
                }}
                className=" bg-black text-lg hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-3 rounded-full"
              >
                Reset
              </button>

              <button
                disabled={!credits[index].grade}
                onClick={() => {
                  if (index < credits.length - 1) {
                    setIndex(index + 1);
                  } else {
                    handleCalculate();
                  }
                }}
                className=" bg-black text-lg  hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-3 rounded-full"
              >
                {index < credits.length - 1 ? "Next" : "Calculate"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 className=" text-3xl px-3">
            Your Cummulative grade point is <b>{cgpa.toFixed(2)}</b> ⚡❤️‍🔥
          </h1>
          <p className="px-3">{getCGPAMessage(cgpa)}</p>
          {/* <p>Cummulative Grade Point Average (CGPA) is <b>{(cgpa/2).toFixed(2)}</b></p> */}
          <button
            onClick={() => {
              setIndex(0);
              setCredits(creditArray);
              setCgpa(0);
              setIsGenerated(false);
            }}
            className=" bg-black text-lg  hover:scale-105 transition-all duration-150 text-white py-1 m-2 px-3 rounded-full"
          >
            Reset
          </button>

          <a href="https://www.linkedin.com/in/nandhakrishnanp/">
      <p className=" rounded-xl text-center p-1 underline text-white bg-black w-full"> connect with me For more intersting Projects  ❤️  </p></a>
     
        </div>
      )}
    </>
  );
};
