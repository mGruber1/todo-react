import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
    <Form className="w-75 d-flex justify-content-center">
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Todo..."
        aria-label="Todo..."
        aria-describedby="button-addon2"
        value={todoTitle}
        onChange={handleTodoTitleChange}
      />
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Description..."
        aria-label="Description..."
        aria-describedby="button-addon2"
        value={todoDescription}
        onChange={handleDescriptionChange}
      />
      <Button
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
      </Button>
    </Form>
  );
};
