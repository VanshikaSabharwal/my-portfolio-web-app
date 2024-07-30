// import React from "react";
// import Head from "next/head"; // Import Head from next/head
// import Terminal from "../Components/Terminal/Terminal";
// import useHistory from "../Components/Terminal/History/historyHook";
// import { banner } from "@/utilis/justBin";
// import config from "../../config.json";
// import { History } from "../Components/Terminal/History/History";

// interface IndexPageProps {
//   inputRef: React.MutableRefObject<HTMLInputElement>;
// }

// const Services: React.FC<IndexPageProps> = ({ inputRef }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null); // Correct typing for containerRef

//   const {
//     history,
//     command,
//     lastCommandIndex,
//     setCommand,
//     setHistory,
//     clearHistory,
//     setLastCommandIndex,
//   } = useHistory([]);

//   const init = React.useCallback(async () => {
//     const bannerText = await banner();
//     setHistory((prevHistory) => [...prevHistory, { command: bannerText }]);
//   }, [setHistory]);

//   React.useEffect(() => {
//     init();
//   }, [init]);

//   React.useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.scrollIntoView();
//       inputRef.current.focus({ preventScroll: true });
//     }
//   }, [history, inputRef]);

//   return (
//     <>
//       <Head>
//         <title>{config.title}</title>
//       </Head>

//       <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
//         <div ref={containerRef} className="overflow-y-auto h-full">
//           <History history={history} />
//           <Terminal
//             inputRef={inputRef}
//             containerRef={containerRef}
//             command={command}
//             history={history}
//             lastCommandIndex={lastCommandIndex}
//             setCommand={setCommand}
//             setHistory={setHistory}
//             setLastCommandIndex={setLastCommandIndex}
//             clearHistory={clearHistory}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;
