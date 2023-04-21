import { useState } from "react";
import "./styles.css";
import React from "react";

function Column(props) {
  return (
    <div className="column" onClick={props.onClick}>
      {[5, 4, 3, 2, 1, 0].map((rowIndex) => (
        <div className={`slot ${props.chips[rowIndex]}`} key={rowIndex}></div>
      ))}
    </div>
  );
}

export default function App() {
  const [board, updateBoard] = useState([[], [], [], [], [], [], []]);
  const [playerTurn, changePlayerTurn] = useState("red");
  //Note: Use an array as the intial value to keep track of the tokens dropped

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else if (playerTurn === "yellow") {
      changePlayerTurn("red");
    }
  }
  function playColumn(columnNumber) {
    if (board[columnNumber].length < 6) {
      board[columnNumber] = [...board[columnNumber], playerTurn];
      updateBoard([...board]);
      togglePlayerTurn();
      if (isWin(board)) {
        alert("Winner");
      }
    }
  }

  return (
    <div className="App">
      <div class="board">
        {board.map((column, index) => (
          <Column
            key={index.toString()}
            onClick={() => playColumn(index)}
            chips={column}
          ></Column>
        ))}
      </div>
      <p>It is {playerTurn}'s turn</p>
    </div>
  );
}
function isWin(board) {
  // win vertically
  for (const column of board) {
    for (const offset of [0, 1, 2]) {
      if (
        column[offset] !== undefined &&
        column[offset] === column[offset + 1] &&
        column[offset] === column[offset + 2] &&
        column[offset] === column[offset + 3]
      ) {
        return column[offset];
      }
    }
  }
}
const exampleState = {
  nextTurn: "yellow",
  board: [[], [], [], ["yellow", "yellow", "yellow"]]
};
isWin(exampleState.board); //no one wins

isWin([
  [],
  [],
  [],
  ["yellow", "yellow", "yellow", "yellow", "red"],
  ["red"],
  ["red"],
  ["red"]
]); //yellow wins
