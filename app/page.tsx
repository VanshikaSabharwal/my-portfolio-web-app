"use client";
import React from "react";
import Head from "next/head";
import config from "./../config.json";
import { Terminal } from "./Components/Terminal/Terminal";
import useHistory from "./Components/Terminal/History/historyHook";
import { History } from "./Components/Terminal/History/History";
import { banner } from "../utilis/justBin";

const IndexPage = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef(null);

  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const [isBannerSet, setIsBannerSet] = React.useState(false);

  React.useEffect(() => {
    const init = async () => {
      const bannerText = await banner([]);
      setHistory(bannerText);
      setIsBannerSet(true);
    };

    if (!isBannerSet) {
      init();
    }
  }, [isBannerSet, setHistory]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>
      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />
          <Terminal
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
