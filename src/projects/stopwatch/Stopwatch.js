import React, { useState } from "react";
import "./stopWatch.css";
const Stopwatch = () => {
  let hr = 0;
  let mt = 0;
  let sc = 0;
  const [hour, sethour] = useState(0);
  const [mnt, setmnt] = useState(0);
  const [sec, setsec] = useState(0);

  const [start, setStart] = useState(0);
  const startTimer = () => {
    console.log(start);
    if (start === 0) {
      setStart(start + 1);
      console.log(start);
      console.log("starting timer ", start);
    }
    if (start === 1) {
      count();
    }
  };
  const stopTimer = () => {
    setStart(0);
  };
  const resetTimer = () => {
    sethour(0);
    setmnt(0);
    setsec(0);
    setStart(0);
  };
  function count() {
    if (start === 1) {
      sc = sc + 1;
      if (sec == 60) {
        sc = 0;
        mt = mt + 1;
      }
      if (mt == 60) {
        mt = 0;
        hr = hr + 1;
      }
      setsec(sc);
      setmnt(mnt);
      sethour(hr);
      setTimeout(count, 1000);
    }
  }
  return (
    <>
      <main className="stopwatch">
        <div className="display">
          <div className="box hr">{hour < 10 ? "0" + hour : hour}</div>
          <div className="box mnt">{mnt < 10 ? "0" + mnt : mnt}</div>
          <div className="box sec">{sec < 10 ? "0" + sec : sec}</div>
        </div>
        <div className="buttons">
          <button className="start btn" onClick={startTimer}>
            start
          </button>
          <button className="stop btn" onClick={stopTimer}>
            stop
          </button>
          <button className="reset btn" onClick={resetTimer}>
            reset
          </button>
        </div>
      </main>
    </>
  );
};

export default Stopwatch;
