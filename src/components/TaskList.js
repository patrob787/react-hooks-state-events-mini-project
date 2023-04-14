import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteClick }) {
  
  console.log(tasks, "from task list")
  
  const renderTasks = tasks.map((task) => (
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
