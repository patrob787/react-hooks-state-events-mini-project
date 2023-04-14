import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("All");
  
  function onButtonClick(value) {
    setSelected(value);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onButtonClick={onButtonClick} 
        selected={selected} />
      <NewTaskForm />
      <TaskList tasks={TASKS} selected={selected} />
    </div>
  );
}

export default App;
