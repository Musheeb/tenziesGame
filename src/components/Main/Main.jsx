import "./Main.css";
import Die from "../Die/Die.jsx";

import { useState } from "react";
import { allNewDice } from "../../utils/die.js";

export default function Main() {
  const [numbers, setNumbers] = useState(allNewDice());

  function rollDice() {
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

  console.log(numbers);

  return (
    <main className="main-container">
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
        Roll
      </button>
    </main>
  );
}
