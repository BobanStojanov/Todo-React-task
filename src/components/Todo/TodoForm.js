import { useState } from "react";

import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredStatus, setEnteredStatus] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      name: enteredName,
      date: new Date(enteredDate),
      status: enteredStatus,
    };

    props.onSaveTodoData(todoData);
    setEnteredName("");
    setEnteredDate("");
    setEnteredStatus("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={nameChangeHandler}
            value={enteredName}
            required
          ></input>
        </div>
        <div className="new-todo__control">
          <input
            type="date"
            placeholder="Date"
            name="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            required
          ></input>
        </div>
        <div className="new-todo__control">
          <select
            name="Status"
            onChange={statusChangeHandler}
            value={enteredStatus}
            required
          >
            <option value=""></option>
            <option>Active</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
      <div className="new-todo__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add ToDo</button>
      </div>
    </form>
  );
};

export default TodoForm;

//  Да се креира ToDo апликација, во која секоја ставка ќе има Name, Date и Status (Active, Completed).

// Секоја ставка да може да се едитира и брише.

// Листата да може да се сортира по сите колони.

// Да има филтер по Date и Status.

// Апликацијата да се направи со HTML5, CSS3 и ES6 (или Angular 2+) и решението да се постави на GitHub.
