import React from "react";

function Rating({ text, pos }) {
  return (
    <div className={`flex items-center justify-${pos}`}>
      <div
        id="rating"
        className="flex items-center justify-left bg-[--light-grayish-magenta] px-8 py-4 w-[80%]  rounded-xl overflow-x-auto"
      >
        <div className="flex gap-2 mr-7">
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
