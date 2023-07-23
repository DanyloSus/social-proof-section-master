import React from "react";

function Review({ pos, img, username, text }) {
  return (
    <div id="review" className={`h-full w-full flex items-${pos}`}>
      <div className="h-[80%] w-full bg-[--very-dark-magenta] text-[--light-grayish-magenta] rounded-xl flex-col px-8 py-10 overflow-y-auto">
        <div id="data" className="flex items-center justify-start gap-5 mb-6 ">
          <img src={`./${img}`} alt={img} className=" w-12 rounded-full" />
          <div>
            <h2>{username}</h2>
            <h2 className="text-[--soft-pink] opacity-70 -mt-2">
              Verified Buyer
            </h2>
          </div>
        </div>
        <p
          className={`after:content-['"'] before:content-['"'] after:ml-1 before:mr-1 text-sm xl:text-lg`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Review;
