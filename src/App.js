import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  const [tokens, changeTokens] = useState([]);
  const [board, updateBoard] = useState([[], [], [], [], [], [], []]);

  //Note: Use an array as the intial value to keep track of the tokens dropped
  function playColumn(columnNumber) {
    updateBoard([...board[columnNumber], playerTurn]);
  }
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

  function Column(props) {
    return (
      <div class="column" onClick={() => props.onClick()}>
        <div class="BlueSquare">
          <button class={`${props.tokens[5]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${props.tokens[4]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${props.tokens[3]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${props.tokens[2]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${props.tokens[1]} circle`}></button>
        </div>
        <div class="BlueSquare">
          <button class={`${props.tokens[0]} circle`}></button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div class="board">
        <Column tokens={board[0]} onClick={() => addToken()} />;
        <Column tokens={board[1]} onClick={() => addToken()} />;
        <p>It is {playerTurn}'s turn</p>
      </div>
    </div>
  );
}
