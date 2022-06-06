import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  const [tokens, changeTokens] = useState([]);
  const [board, updateBoard] = useState([[], [], [], [], [], [], []]);

  //Note: Use an array as the intial value to keep track of the tokens dropped
  function playColumn(columnNumber) {
    updateBoard([...board, playerTurn]);
  }
  function togglePlayerTurn() {
    if (tokens.length < 6) {
      if (playerTurn === "red") {
        changePlayerTurn("yellow");
      } else if (playerTurn === "yellow") {
        changePlayerTurn("red");
      }
    }
  }

  function addToken() {
    changeTokens([...tokens, playerTurn]);
    togglePlayerTurn();
    playColumn();
  }

  function Column(props) {
    return (
      <div class="column" onClick={() => props.onClick()}>
        {board.map((a) => (
          <div>
            <div class="BlueSquare">
              <button class={`${props.tokens[a]} circle`}></button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <div class="board">
        <Column tokens={board[0]} onClick={() => addToken()} />,
        <Column tokens={board[1]} onClick={() => addToken()} />,
        <Column tokens={board[2]} onClick={() => addToken()} />,
        <Column tokens={board[3]} onClick={() => addToken()} />,
        <Column tokens={board[4]} onClick={() => addToken()} />,
        <Column tokens={board[5]} onClick={() => addToken()} />,
        <p>It is {playerTurn}'s turn</p>
      </div>
    </div>
  );
}
