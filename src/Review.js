import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  let { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index < 0) index = people.length - 1;
    else if (index > people.length - 1) index = 0;
    return index;
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    newIndex = newIndex === index ? newIndex + 1 : newIndex;
    setIndex(checkIndex(newIndex));
  };

  return (
    <section className="container-fluid" id="reviewBody">
      <h1>Our Reviews</h1>
      <div id="divider"></div>
      <div
        id="reviewContainer"
        className="d-flex flex-column align-items-center justify-centent-center mt-4 py-4 px-5"
      >
        <article id="review" className="d-flex flex-column align-items-center">
          <div id="image-container">
            <div id="qouteContainer">
              <FaQuoteRight id="qoute" />
            </div>
            <img src={image} alt={name} />
          </div>
          <h5 className="mt-3 text-center text-capitalize">{name}</h5>
          <p className="text-center text-uppercase text-info">{job}</p>
          <p className="text-center">{text}</p>
        </article>
        <div id="navigator" className="mb-3">
          <button
            type="button"
            className="navigation-left bg-transparent text-info border-0 me-1"
            onClick={prevReview}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="navigation-right bg-transparent text-info border-0 ms-1"
            onClick={nextReview}
          >
            <FaChevronRight />
          </button>
        </div>
        <button type="btn" id="randomButton" className="border-0 px-3 py-1" onClick={randomReview}>
          Surprise Me
        </button>
      </div>
    </section>
  );
};

export default Review;
