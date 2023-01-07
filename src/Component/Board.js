import React from "react";
import PlaceMark from "./PlaceMark";
import "./Board.css";

const Board = ({ board, onClick }) => {
  return (
    <div className="Board">
      {board.map((value, index) => {
        return (
          <PlaceMark
            value={value}
            onClick={() => value === null && onClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
