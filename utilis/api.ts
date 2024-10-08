import axios from "axios";
import config from "../config.json";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.githubOwnerName}/repos`
  );
  return data;
};
export const getReadMe = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};
export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");
  return {
    quote: `“ ${data.content}” - ${data.author} `,
  };
};
