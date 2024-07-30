import React from "react";
import { exitCommand } from "@/utilis/exitCommands";
import { TabCompletion } from "@/utilis/tabCompletion";
import { Ps1 } from "./Ps1";
import { shellCommand } from "@/utilis/shellCommand";

interface TerminalProps {
  inputRef: any;
  containerRef: any;
  command: any;
  history: any;
  lastCommandIndex: any;
  setLastCommandIndex: any;
  setCommand: any;
  setHistory: any;
  clearHistory: any;
}

export const Terminal: React.FC<TerminalProps> = ({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setLastCommandIndex,
  setCommand,
  setHistory,
  clearHistory,
}) => {
  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: [string] = history
      .map(({ command }: any) => command)
      .filter((command: string) => command);

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();
      setCommand("");
      setHistory("");
      setLastCommandIndex(0);
    }
    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }
    if (event.key === "Enter") {
      event.preventDefault();
      setLastCommandIndex(0);
      await shellCommand(command, setHistory, clearHistory, setCommand);
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
    if (event.key === "Tab") {
      event.preventDefault();
      TabCompletion(command, setCommand);
    }
    if (event.key == "ArrowUp") {
      event.preventDefault();
      if (!command.length) {
        return;
      }
      const num: number = lastCommandIndex + 1;
      if (num <= commands.length) {
        setLastCommandIndex(num);
        setCommand(commands.length - num);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!command.length) {
        return;
      }
      const num: number = lastCommandIndex - 1;
      if (num >= 0) {
        setLastCommandIndex(num);
        setCommand(commands[commands.length - num]);
      } else {
        setLastCommandIndex(0);
        setCommand("");
      }
    }
  };
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value);
  };

  return (
    <div className="flex flex-row space-x-2 terminal-font">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>
      <input
        type="text"
        ref={inputRef}
        id="prompt"
        className={`terminal-input terminal-font bg-light-background focus:outline-none flex-grow ${
          exitCommand(command) || command === ""
            ? "text-dark-green"
            : "text-dark-red"
        }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};
export default Terminal;
