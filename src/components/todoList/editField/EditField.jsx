import { useRef } from "react";
import { Form } from "react-bootstrap";

export const EditField = (props) => {
  const formInputRef = useRef();

  const handleChange = () => {
    const newTodoTitle = formInputRef.current.value;
    props.setNewTodoTitle(newTodoTitle);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Change Todo</Form.Label>
        <Form.Control
          type="text"
          ref={formInputRef}
          placeholder="New Todo Name"
          value={props.newTodoTitle}
          onChange={(event) => {
            handleChange(event);
          }}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};
