import { useState } from "react";
import TodoForm from "./TodoForm";
import "./NewTodo.css";

const NewTodo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    props.onAddTodo(todoData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-todo">
      {!isEditing && <button onClick={startEditingHandler}>Add ToDo</button>}
      {isEditing && (
        <TodoForm
          onSaveTodoData={saveTodoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTodo;
