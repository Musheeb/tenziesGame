import "./Main.css";
import Die from "../Die/Die.jsx";
import Confetti from "react-confetti";

// import useWindowSize from "react-use/lib/useWindowSize";
import { useState, useEffect } from "react";
import { allNewDice } from "../../utils/die.js";

export default function Main() {
  //   const { width, height } = useWindowSize();
  const [numbers, setNumbers] = useState(allNewDice());
  const [tenzies, setTenzeis] = useState(false);

  useEffect(() => {
    // console.log("Effect rendered");
    const isHeld = numbers.every((item) => item.isHeld);
    const firstElementValue = numbers[0].value;
    const allSameValues = numbers.every(
      (item) => item.value === firstElementValue
    );
    // const stillNotWon = numbers.find((item) => {
    //   return item.value !== firstElementValue;
    // });
    if (isHeld && allSameValues) {
      setTenzeis(true);
      //   console.log("You won the game");
    }
  }, [numbers]);

  function rollDice() {
    if (tenzies) {
      setNumbers(allNewDice());
      setTenzeis(false);
      return;
    }
    setNumbers((oldDice) => {
      return oldDice.map((die) => {
        return die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            };
      });
    });
  }

  function holdDice(id) {
    // console.log("Held dice ID is - ", id);
    setNumbers((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  //   console.log(numbers);

  const buttonText = tenzies ? "New Game" : "Roll";

  return (
    <main className="main-container">
      {tenzies && <Confetti />}
      <div className="main-text-container">
        <h1 className="heading">Tenzies</h1>
        <p className="paragraph">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="die-container">
        {numbers.map((die) => (
          <Die
            key={die.id}
            number={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
          />
        ))}
        {/* <Die number={1} />
        <Die number={2} />
        <Die number={3} />
        <Die number={4} />
        <Die number={5} />
        <Die number={6} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={4} /> */}
      </div>
      <button className="roll-button" onClick={rollDice}>
        {buttonText}
      </button>
    </main>
  );
}
