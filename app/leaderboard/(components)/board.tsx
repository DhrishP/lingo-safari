"use client";
import React, { useEffect, useState } from "react";
import Profiles from "./profile";
import './style.css'

export default function Board() {
  const [Leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const res = await fetch("/api/leaderboard");
      const data = await res.json();
      setLeaderboard(data);
      console.log(data)
    };
    fetchLeaderboard();
  }, []);
  const [period, setPeriod] = useState(0);

  const handleClick = (e: any) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id="7">
          7 Days
        </button>
        <button onClick={handleClick} data-id="30">
          30 Days
        </button>
        <button onClick={handleClick} data-id="0">
          All-Time
        </button>
      </div>

      <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
    </div>
  );
}

function between(data: any, between: any) {
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter((val: any) => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    });

    // sort with descending order based on score
    return filter.sort((a: any, b: any) => b.score - a.score);
}
