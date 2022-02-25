import React from "react";

import "./TodoStatusFilter.css";

const TodoStatusFilter = (props) => {
  const statusDropdownChangeHandler = (event) => {
    props.onChangeStatusFilter(event.target.value);
  };

  return (
    <div className="todostatus-filter">
      <div className="todostatus-filter__control">
        <label>Filter by Status</label>
        <select value={props.select} onChange={statusDropdownChangeHandler}>
          <option value=""></option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TodoStatusFilter;
