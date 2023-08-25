"use client";

export const Header = () => {
  const buttonClickHandler = () => {};
  return (
    <div className="z-20 flex h-auto w-full max-w-7xl items-center p-2 text-2xl text-base-content">
      <div className="cursor-pointer pl-3 font-bold">
        FINGU<span className="font-serif text-xs"> alpha</span>
      </div>
      {/* <Button
        data={{ name: "Request Access" }}
        event={{ click: buttonClickHandler }}
        className="btn-primary ml-auto"
      /> */}
      <button
        className="btn btn-ghost rounded-box ml-auto"
        onClick={buttonClickHandler}
      >
        About
      </button>
    </div>
  );
};
