import React, { useEffect, useState } from "react";
import axios from "axios";
import { Progress } from "../components/ui/progress";

const Leetcode = () => {
  const [stats, setStats] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
    totalQues: 0,
  });

  useEffect(() => {
    axios
      .get("https://leetcode-stats-api.herokuapp.com/rahul-sharma13")
      .then((response) => {
        setStats({
          easy: response.data.easySolved,
          medium: response.data.mediumSolved,
          hard: response.data.hardSolved,
          totalQues: response.data.totalSolved,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calValue = (value) => {
    return (value / stats.totalQues) * 100;
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Leetcode Stats</h1>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 xl:mx-0 mx-auto">
        <div className="flex justify-center items-center gap-4">
          <span className="text-white/60">Language</span>
          <h3 className="text-lg">C++</h3>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-white/60">Total Questions</span>
          <h3 className="text-lg">{stats.totalQues}</h3>
        </div>
      </div>

      <div className="container ml-5 xl:ml-0 flex flex-col gap-2">
        <div className="flex  items-center">
          <div className="flex xl:justify-start justify-center items-center gap-4 w-[50%]">
            <h1 className="text-green-400">Easy</h1>
            <span>{stats.easy}</span>
          </div>
          <Progress value={calValue(stats.easy)} className="" />
        </div>

        <div className="flex items-center">
          <div className="flex justify-center xl:justify-start items-center gap-4 w-[50%]">
            <h1 className="text-yellow-400/80">Medium</h1>
            <span>{stats.medium}</span>
          </div>
          <Progress value={calValue(stats.medium)} />
        </div>

        <div className="flex items-center">
          <div className="flex justify-center xl:justify-start items-center gap-4 w-[50%]">
            <h1 className="text-red-400">Hard</h1>
            <span>{stats.hard}</span>
          </div>
          <Progress value={calValue(stats.hard)} />
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
