import { nanoid } from "nanoid";

export function allNewDice() {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    });
  }
  //   console.log(randomNumbers);
  return randomNumbers;
}
