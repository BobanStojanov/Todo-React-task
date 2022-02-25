import React from "react";

import "./TodoYearFilter.css";

const TodoYearFilter = (props) => {
  const yearDropdownChangeHandler = (event) => {
    props.onChangeYearFilter(event.target.value);
  };

  return (
    <div className="todoyear-filter">
      <div className="todoyear-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearDropdownChangeHandler}>
          <option value=""></option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default TodoYearFilter;
