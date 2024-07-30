import React from "react";
import config from "../../../config.json";

export const Ps1 = () => {
  return (
    <div className="terminal-font">
      <span className="text-light-yellow dark:text-dark-yellow">
        {config.ps1_host}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_host}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
