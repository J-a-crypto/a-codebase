import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  const [tokens, changeTokens] = useState([]);
  //Note: Use an array as the intial value to keep track of the tokens dropped

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else if (playerTurn === "yellow") {
      changePlayerTurn("red");
    }
  }

  function addToken() {
    changeTokens([...tokens, playerTurn]);
    togglePlayerTurn();
  }

  return (
    <div className="App">
      <div class="board" onClick={() => addToken()}>
        <div class="BlueSquare">
          <button class={`${tokens[4]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${tokens[3]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${tokens[2]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${tokens[1]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${tokens[0]} circle`}></button>
        </div>
        <p>It is {playerTurn}'s turn</p>
      </div>
    </div>
  );
}
