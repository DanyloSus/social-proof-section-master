import React from "react";

function Rating({ text, pos }) {
  return (
    <div className={`flex items-center justify-${pos}`}>
      <div
        id="rating"
        className="flex items-center justify-left bg-[--light-grayish-magenta] px-8 py-4 lg:w-[80%]  rounded-xl overflow-x-auto w-full flex-col lg:flex-row"
      >
        <div className="flex gap-2 mr-7 lg:mb-0 mb-2">
          <img src="./icon-star.svg" alt="icon star" />
          <img src="./icon-star.svg" alt="icon star" />
          <img src="./icon-star.svg" alt="icon star" />
          <img src="./icon-star.svg" alt="icon star" />
          <img src="./icon-star.svg" alt="icon star" />
        </div>
        <h2 className=" xl:text-xl font-bold text-[--very-dark-magenta] text-base">
          {text}
        </h2>
      </div>
    </div>
  );
}

export default Rating;
