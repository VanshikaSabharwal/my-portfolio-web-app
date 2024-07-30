import React from "react";
import * as justBin from "./justBin";

interface JustBinCommands {
  [command: string]: (args: string[]) => Promise<string>;
}

const typedJustBin = justBin as unknown as JustBinCommands;

export const shellCommand = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const args = command.split(" ");
  args[0] = args[0].toLowerCase();
  if (args[0] === "clear") {
    clearHistory();
  } else if (command === "") {
    setHistory("");
  } else if (!typedJustBin[args[0]]) {
    setHistory(
      `shell:Command Not Found: ${args[0]}.Try 'help' to get started.`
    );
  } else {
    const output = await typedJustBin[args[0]](args.slice(1));
    setHistory(output);
  }
  setCommand("");
};
