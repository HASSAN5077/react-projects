import React, { useState } from "react";
import ReviewData from "./reviewData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = ReviewData[index];
  const randomReview = () => {
    let random = Math.floor(Math.random() * ReviewData.length);
    setIndex(random);
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(ReviewData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    if (index === ReviewData.length - 1) {
      console.log("handle next if");
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="review">
      <div className="image">
        <img src={image} alt="" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="next-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Random
      </button>
    </div>
  );
};

export default Review;
