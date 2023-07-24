import React from "react";

function BG() {
  return (
    <div className=" absolute w-screen h-screen z-0 top-0">
      <img
        src="./bg-pattern-top-desktop.svg"
        alt="bg pattern top desktop"
        className="absolute top-0 left-0 z-0 lg:block hidden"
      />
      <img
        src="./bg-pattern-bottom-desktop.svg"
        alt="bg pattern bottom desktop"
        className="absolute bottom-0 right-0 z-0 lg:block hidden"
      />
      <img
        src="./bg-pattern-top-mobile.svg"
        alt="bg pattern top mobile"
        className="absolute top-0 left-0 z-0 block lg:hidden"
      />
      <img
        src="./bg-pattern-bottom-mobile.svg"
        alt="bg pattern bottom mobile"
        className="absolute bottom-0 right-0 z-0 block lg:hidden"
      />
    </div>
  );
}

export default BG;
