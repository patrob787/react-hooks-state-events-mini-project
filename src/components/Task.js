import React from "react";

function Task({ text, category, onDeleteClick }) {

function handleClick() {
  onDeleteClick(text);
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
