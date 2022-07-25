import { v4 as uuidv4 } from "uuid";
import { ICard } from "../types/card";
import mix from "./mix";
import getPrimeNumbers from "./getPrimeNumbers";

const getGameCards = (): ICard[] => {
  const primeNumbers = getPrimeNumbers(50);
  const duplicatedNumbers = [...primeNumbers, ...primeNumbers];
  const mixedNumbers = mix(duplicatedNumbers);

  return mixedNumbers.map((number) => ({
    id: uuidv4(),
    number,
    isGuessed: false,
  }));
};

export default getGameCards;
