import React from "react";

function CategoryFilter({ categories, onButtonClick, selected }) {
  
  function handleClick(e) {
    onButtonClick(e.target.value);
  }
  
  const renderCategories = categories.map((cat) => (
    <button 
      onClick={handleClick} 
      key={cat} 
      value={cat}
      className={selected === cat ? "selected" : ""}        
    >{cat}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
