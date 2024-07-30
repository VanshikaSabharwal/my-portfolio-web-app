import * as bin from "./index";
import config from "../../config.json";

// help cmd
export const help = async () => {
  const commands = Object.keys(bin).sort().join(", ");

  var c = "";
  for (let i = 0; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all Commands:\n${c}\n
  [tab]:auto completion.
  [ctrl+l]/clear: clear terminal.\n
  Type "fetchall" to display summary.
  `;
};

// repo cmd
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return "Opening repo...";
};

// about cmd
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
    Welcome to my Website!
    More About Me:
    "fetchall" - a short summary.
    "resume" - my latest resume.
    "readme" - my github readme.`;
};

// resume cmd
export const resume = () => {
  window.open(`${config.readmeUrl}`);
  return "Opening resume...";
};

// donate cmd
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
  here are the ways you can support my work:
  - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
  - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.gpay}" target="_blank">gpay</a></u>
  `;
};

// linkedin
export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`${config.social.linkedin}`);
  return "Opening Linkedin";
};
// twitter
export const twitter = async (args: string[]): Promise<string> => {
  window.open(`${config.social.twitter}`);
  return "Opening Twitter";
};
// github
export const github = async (args: string[]): Promise<string> => {
  window.open(`${config.social.github}`);
  return "Opening Github";
};
// email
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}`;
};

// search
export const search = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/searcch?q=${args.join("")}`);
  return `Searching google for ${args.join("")}...`;
};

// linux cmd

// echo
export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};
//  who am i
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps2_user}`;
};

// ls
export const ls = async (args: string[]): Promise<string> => {
  return `
    a
    bunch
    of
    files
    `;
};
// date
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};
// cd
export const cd = async (args: string[]): Promise<string> => {
  return `Unfortunately, i cannot afford any more diretories. If you want to help ,type 'donate' . `;
};

// banner
export const banner = async (args: string[]): Promise<string> => {
  return `

Type 'help' to see list of commands.
Type 'donate' to support the project.
Type 'fetchall'to displa summary.
Type 'repo' to see project repo.

`;
};
