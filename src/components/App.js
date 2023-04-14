import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("All");
  const [newTaskList, setNewTaskList] = useState(TASKS)
  
  function onButtonClick(value) {
    setSelected(value);
  }

  function onTaskFormSubmit(taskObj) {
    setNewTaskList([...newTaskList, taskObj])
  };

  function onDeleteClick(value) {
    setNewTaskList(newTaskList.filter((task) => {
      return task.text !== value
    }))
  }

  const selectedTasks = newTaskList.filter((task) => {
    if (selected === "All") {
      return true;
    } else {
      return task.category === selected;
    }
  })

  console.log(newTaskList, "from app")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onButtonClick={onButtonClick} 
        selected={selected} />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList 
        tasks={selectedTasks} 
        onDeleteClick={onDeleteClick} />
    </div>
  );
}

export default App;
