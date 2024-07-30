import React from "react";
import config from "../../../config.json";

export const Ps1 = () => {
  return (
    <div className="terminal-font">
      <span className=" dark:text-dark-yellow text-pink-700">
        {config.ps2_user}
      </span>
      <span className=" dark:text-dark-gray text-[##f9b7c1]">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_host}
      </span>
      <span className="text-[#fd00ff] dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
