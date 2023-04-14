import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, selected }) {
  const [tasksList, setTasksList] = useState(tasks);

  function onDeleteClick(text) {
    setTasksList(tasksList.filter((task) => {
      return task.text !== text
    }))
  }

  const selectedTasks = tasksList.filter((task) => {
    if (selected === "All") {
      return true;
    } else {
      return task.category === selected;
    }
  })

  const renderTasks = selectedTasks.map((task) => (
    <Task key={task.text} 
          text={task.text} 
          category={task.category} 
          onDeleteClick={onDeleteClick} />
  ))

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
