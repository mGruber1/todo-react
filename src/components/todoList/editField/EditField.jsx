import { Form } from "react-bootstrap";

export const EditField = (props) => {
  const handleChange = (e) => {
    const newTodoTitle = e.target.value;
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
          onChange={(event) => {
            handleChange(event);
          }}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};
