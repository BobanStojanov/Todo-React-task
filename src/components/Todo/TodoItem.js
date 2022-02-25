import TodoDate from "./TodoDate";

import "./TodoItem.css";
import Card from "../UI/Card";

function TodoItem(props) {
  const removeTodoHandler = (id) => {
    console.log(id);
  };

  return (
    <li className="todo-item__li">
      <Card classname="todo-item">
        <div className="todo-item__name">
          <h2>{props.name}</h2>
        </div>
        <TodoDate date={props.date} />
        <div className="todo-item__status">{props.status}</div>
        <button type="button" onClick={() => removeTodoHandler(props.id)}>
          Delete
        </button>
      </Card>
    </li>
  );
}

export default TodoItem;
