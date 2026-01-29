export function allNewDice() {
  const randomNumbersArray = [];
  for (let i = 0; i < 10; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 7));
  }
  console.log(randomNumbersArray);
  return randomNumbersArray;
}
