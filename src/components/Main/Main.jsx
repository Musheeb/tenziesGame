import "./Main.css";
import Die from "../Die/Die.jsx";

import { allNewDice } from "../../utils/die.js";

export default function Main() {
  console.log(allNewDice());
  return (
    <main className="main-container">
      <div className="die-container">
        <Die number={1} />
        <Die number={2} />
        <Die number={3} />
        <Die number={4} />
        <Die number={5} />
        <Die number={6} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={4} />
      </div>
    </main>
  );
}
