import React from "react";
import Review from "./Review";
import "./reviewInfo.css";

const ReviewMain = () => {
  return (
    <main className="reviewContainer">
      <div className="title">
        <h2>our reviews </h2>
        <div className="underline"></div>
      </div>
      <Review />
    </main>
  );
};

export default ReviewMain;
