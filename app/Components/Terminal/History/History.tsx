import react from "react";
import { Ps1 } from "../Ps1";
import { History as HistoryInterface } from "./HistoryInterface";

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index} className="terminal-font">
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>
            <div className="flex-grow">{entry.command}</div>
          </div>
          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};
