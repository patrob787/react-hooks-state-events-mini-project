import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [selectCat, setSelectCat] = useState("");
  const [details, setDetails] = useState("");
  
  const renderCategories = categories.map((cat) => {
    if (cat !== "All") {
      return <option key={cat} name={cat} >{cat}</option>
    } else {
      return <option key="blank"></option>
    }
  })

  function handleTextChange(e) {
    setDetails(e.target.value)
  }

  function handleCatChange(e) {
    setSelectCat(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      text: details,
      category: selectCat,
    }
    
    onTaskFormSubmit(newTask);
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextChange} type="text" name="text" value={details} />
      </label>
      <label>
        Category
        <select onChange={handleCatChange} name="category" value={selectCat} >
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
