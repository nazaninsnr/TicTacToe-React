import React from "react";
import "./PlaceMark.css";

const PlaceMark = ({ value, onClick }) => {
  const style = value === "X" ? "cell  x" : "cell o";
  return (
    <div className={style} onClick={onClick}>
      {value}
    </div>
  );
};

export default PlaceMark;
