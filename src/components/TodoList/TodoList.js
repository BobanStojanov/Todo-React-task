import React from "react";

import "./TodoList.css";
import TodoItem from "../Todo/TodoItem";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          name={todo.name}
          date={todo.date}
          status={todo.status}
        />
      ))}
    </ul>
  );
};

export default TodoList;
