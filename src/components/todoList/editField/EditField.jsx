import { Form } from "react-bootstrap";

export const EditField = (props) => {
  const handleChange = (event) => {
    const newTodoTitle = event.target.value;
    props.setNewTodoTitle(newTodoTitle);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Change Todo</Form.Label>
        <Form.Control
          type="text"
          placeholder="New Todo Name"
          value={props.newTodoTitle}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
