import { useState } from "react";

import "./Todos.css";
import TodoList from "../TodoList/TodoList";
import Card from "../UI/Card";
import TodoStatusFilter from "./TodoStatusFilter";
import TodoYearFilter from "./TodoYearFilter";

const Todos = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const [filteredStatus, setFilteredStatus] = useState("");

  const yearFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const statusFilterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const filteredYearTodos = props.items.filter((todo) => {
    return todo.date.getFullYear().toString() === filteredYear;
  });

  const filteredStatusTodos = props.items.filter((todo) => {
    return todo.status === filteredStatus;
  });

  return (
    <div>
      <Card classname="todos">
        <TodoYearFilter
          selected={filteredYear}
          onChangeYearFilter={yearFilterChangeHandler}
        />
        <TodoStatusFilter
          select={filteredStatus}
          onChangeStatusFilter={statusFilterChangeHandler}
        />
        <TodoList items={filteredStatusTodos} />
        <TodoList items={filteredYearTodos} />
      </Card>
    </div>
  );
};

export default Todos;
