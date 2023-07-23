import React from "react";

function BG() {
  return (
    <div className=" absolute w-screen h-screen z-0 top-0">
      <img
        src="./bg-pattern-top-desktop.svg"
        alt="bg pattern top desktop"
        className="absolute top-0 left-0 z-0"
      />
      <img
        src="./bg-pattern-bottom-desktop.svg"
        alt="bg pattern bottom desktop"
        className="absolute bottom-0 right-0 z-0"
      />
    </div>
  );
}

export default BG;
