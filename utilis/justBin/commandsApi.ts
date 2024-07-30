// commands that require api
import { getProjects } from "../api";
import { getWeather } from "../api";
import { getReadMe } from "../api";
import { getQuote } from "../api";

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo: any) =>
        `   -->${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}  </a>`
    )
    .join("\n  ");
};

export const quote = async (args: string[]): Promise<string> => {
  const quote = await getQuote();
  return quote.quote;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join("+");
  if (!city) {
    return "Usage: weather [city]. Example :Weather Delhi";
  }
  const weather = await getWeather(city);
  return weather;
};
export const readme = async () => {
  const readme = await getReadMe();
  return `Opening Github README...\n${readme}`;
};
