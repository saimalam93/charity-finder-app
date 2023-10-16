import CausesList from "../CausesList.json";

const searchOptions = CausesList.causes;

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const RandomCause = () => {
  return searchOptions[randomInt(0, searchOptions.length - 1)];
};

export default RandomCause;
