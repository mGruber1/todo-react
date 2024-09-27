import { useState } from "react";

import { v4 as uuid4 } from "uuid";

export const InputField = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const handleTodoTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTodoDescription(event.target.value);
  };
  return (
    <div className="input-group w-75">
      <input
        type="text"
        className="form-control"
        placeholder="Todo..."
        aria-label="Todo..."
        aria-describedby="button-addon2"
        value={todoTitle}
        onChange={handleTodoTitleChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Description..."
        aria-label="Description..."
        aria-describedby="button-addon2"
        value={todoDescription}
        onChange={handleDescriptionChange}
      />
      <button
        onClick={() => {
          if (todoTitle.length !== 0) {
            const newTodo = {
              id: uuid4(),
              todoTitle: todoTitle,
              todoDescription: todoDescription,
            };
            props.setTodos([...props.todos, newTodo]);
            setTodoTitle("");
            setTodoDescription("");
          }
        }}
        className="btn btn-success"
        type="button"
        id="button-addon2"
      >
        Save
      </button>
    </div>
  );
};
