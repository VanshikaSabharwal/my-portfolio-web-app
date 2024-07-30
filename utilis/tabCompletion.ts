import * as justBin from "./justBin";

export const TabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const commands = Object.keys(justBin).filter((entry) =>
    entry.startsWith(command)
  );
  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
