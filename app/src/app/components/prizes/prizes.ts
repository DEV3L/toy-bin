import { season1Prizes } from "./Season1Prizes";
import { season2Prizes } from "./Season2Prizes";

const generateFails = (count: number) => {
  return Array.from({ length: count }, () => ({
    name: "Fail",
    description: "Pet it with your eyes...",
    image: "Toy-Bin - Fail.png",
  }));
};

const fails = generateFails(5);

export const prizes = [...season1Prizes, ...season2Prizes, ...fails];
