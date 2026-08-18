"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { GradeSelector } from "./GradeSelector";

export const SubjectList = ({ filtered }: any) => {
  const filtered1 = JSON.parse(filtered);

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
    let isCorect = true;
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
      } else if (item.grade === "C+") {
        totalPoints += 5.5 * item.credits;
      } else if (item.grade === "C") {
        totalPoints += 5 * item.credits;
      } else {
        alert("Please Select a Valid Grade");
        setIndex(0);
        isCorect = false;
        setCredits(creditArray);
        setCgpa(0);
        setIsGenerated(false);
        return false;
      }
      totalCredits += item.credits;
      return true;
    });
    if (isCorect) {
      const cgpa = totalPoints / totalCredits;
      setCgpa(cgpa);
      setIsGenerated(true);
    }
  };

  function getCGPAMessage(cgpa: number) {
    const genius = [
      "You're a genius! Did Einstein leave you his brain?",
      "Are you secretly a robot? Because your grades are unreal!",
      "NASA called — they want you for their next mission!",
      "Even your GPA is flexing on everyone else!",
      "Plot twist: you're the main character of this movie!",
      "Your brain runs on pure brilliance. No充电 needed!",
      "They said impossible doesn't exist. You just proved it!",
      "Your GPA has its own fan club now!",
      "Somewhere, a professor is smiling because of you!",
      "You didn't just pass — you absolutely dominated!",
    ];

    const great = [
      "Great job! You're the superstar of the class!",
      "You're like WiFi — everyone wants to be connected to your success!",
      "Top tier vibes only! Keep slaying!",
      "Your grades are the plot twist everyone loves!",
      "You're proof that hard work pays off. Keep going!",
      "Almost perfect — you're basically a legend in the making!",
      "The library misses you, but your GPA thanks you!",
      "You're one step closer to that 'proud parent' moment!",
      "Success looks good on you — wear it well!",
      "Your future self is already thanking you for this!",
    ];

    const good = [
      "Not bad! You're cruising along nicely.",
      "Solid work! You're the type who makes it look easy!",
      "You're cooking something great — keep stirring!",
      "This is what steady progress looks like. Love it!",
      "You're not just passing — you're owning it!",
      "Consistency is your superpower. Don't stop now!",
      "You're the kind of student teachers brag about!",
      "Great things take time, and you're right on track!",
      "Your effort is showing — and it looks amazing!",
      "Not everyone can do what you just did. Proud of you!",
    ];

    const average = [
      "You're getting there! Time to hit the books a bit more.",
      "The comeback is always stronger than the setback!",
      "Every expert was once a beginner. You're on your way!",
      "Your potential is through the roof — just believe it!",
      "A little more push and you'll be unstoppable!",
      "You've got the brain — now let's unlock its full power!",
      "Remember, even bamboo takes time to grow. Keep going!",
      "One step at a time. You're closer than you think!",
      "The best investment you can make is in yourself!",
      "You're not behind — you're just building momentum!",
    ];

    const low = [
      "Hey, every champion has a rough round. This is your comeback arc!",
      "Success isn't linear — you're just on a plot twist!",
      "Even Rocky had to lose before he won. Keep fighting!",
      "Your story isn't over — this is just chapter one!",
      "Tough times don't last. Tough students do!",
      "You've survived 100% of your worst days. You'll survive this!",
      "Behind every成功 is a story of never giving up!",
      "Your GPA doesn't define you. Your grit does!",
      "This is the part where the hero rises. Ready?",
      "The only failure is quitting. And you're still here!",
    ];

    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    if (cgpa >= 8) return pick(genius);
    else if (cgpa >= 7) return pick(great);
    else if (cgpa >= 6) return pick(good);
    else if (cgpa >= 5) return pick(average);
    else return pick(low);
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
            <GradeSelector
              onGradeSelect={(grade) => {
                const temp = [...credits];
                temp[index].grade = grade;
                setCredits(temp);

                // Move to next subject or calculate
                if (index < credits.length - 1) {
                  setIndex(index + 1);
                } else {
                  // Calculate after selecting grade for last subject
                  setTimeout(() => {
                    handleCalculate();
                  }, 100);
                }
              }}
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
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 className=" text-3xl text-center px-3">
            Your Cummulative grade point is <b>{cgpa.toFixed(2)}</b> ⚡❤️‍🔥
          </h1>
          <Confetti
            width={2500}
            height={700}
            className=" w-screen h-screen overflow-y-hidden"
            tweenDuration={2000}
          />
          <p className="px-3 text-center">{getCGPAMessage(cgpa)}</p>
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

          <a
            className=" absolute bottom-0 "
            href="https://www.linkedin.com/in/nandhakrishnanp/"
          >
            <p className=" rounded-xl text-center p-1 underline text-white bg-black w-full">
              {" "}
              connect with me For more intersting Projects ❤️
              Nandhakrishnan{" "}
            </p>
          </a>
        </div>
      )}
    </>
  );
};
