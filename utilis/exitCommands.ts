import * as justBin from "./justBin";

export const exitCommand = (command: string) => {
  const commands = ["clear", ...Object.keys(justBin)];
  return commands.indexOf(command.split(" ")[0].toLowerCase()) !== -1;
};
