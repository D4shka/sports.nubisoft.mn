import React, { useState } from "react";

const Point = () => {
  const [countRedTeam, setcountRedTeam] = useState(0);
  const [countBlueTeam, setcountBlueTeam] = useState(0);
  const [theme, setTheme] = useState("blue");

  const decrrementCountRed = () => {
    setcountRedTeam((prevCount) => prevCount - 1);
  };

  const increamentCountRed = () => {
    setcountRedTeam((prevCount) => prevCount + 1);
  };

  const decrrementCountBlue = () => {
    setcountBlueTeam((prevCount) => prevCount - 1);
  };

  const increamentCountBlue = () => {
    setcountBlueTeam((prevCount) => prevCount + 1);
  };
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex justify-center items-center col-start-1 col-end-1 bg-[#EF4E22]">
        <div className="grid grid-rows-6">
          <span className="text-[700px] text-[#ffffff] row-start-1 row-span-5 font-bold">
            {countRedTeam}
          </span>
          <div className="row-start-6 row-end-6">
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
              onClick={decrrementCountRed}
            >
              Хасах
            </button>

            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-40"
              onClick={increamentCountRed}
            >
              Нэмэх
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center col-start-2 col-end-2 bg-[#0000ff]">
        <div className="grid grid-rows-6">
          <span className="text-[700px] row-start-1 row-span-5 text-[#ffffff] font-bold">
            {countBlueTeam}
          </span>
          <div className="row-start-6 row-span-6">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={decrrementCountBlue}
            >
              Хасах
            </button>

            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-40"
              onClick={increamentCountBlue}
            >
              Нэмэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point;
