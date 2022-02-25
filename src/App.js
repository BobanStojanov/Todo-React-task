import React, { useState } from "react";
import Todos from "./components/Todo/Todos";
import NewTodo from "./components/Todo/NewTodo";

const DUMMY_TODOS = [
  {
    id: "t1",
    name: "Do the task",
    date: new Date(2021, 2, 13),
    status: "Active",
  },
  {
    id: "t2",
    name: "Walk your dog",
    date: new Date(2020, 6, 15),
    status: "Completed",
  },
  {
    id: "t3",
    name: "Do your training",
    date: new Date(2021, 3, 23),
    status: "Active",
  },
  {
    id: "t4",
    name: "Do the loundry",
    date: new Date(2021, 1, 28),
    status: "Completed",
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
