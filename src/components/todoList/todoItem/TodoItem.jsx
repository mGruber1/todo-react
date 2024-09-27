import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "react-bootstrap";
import { EditField } from "../editField/EditField";

export const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <Card className="mb-2 w-50">
        <CardHeader
          className={
            isDone ? "text-decoration-line-through" : "text-decoration-none"
          }
        >
          <Row className="d-flex align-items-center">
            <Col className="text-truncate">
              {props.isEditMode && props.index === props.editIndex ? (
                <EditField
                  newTodoTitle={props.newTodoTitle}
                  setNewTodoTitle={props.setNewTodoTitle}
                ></EditField>
              ) : (
                props.title
              )}
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                type="button"
                variant={
                  props.isEditMode && props.index === props.editIndex
                    ? "success"
                    : "warning"
                }
                className={`me-1 ${
                  props.isEditMode && props.index === props.editIndex
                    ? "bi bi-floppy-fill"
                    : "bi bi-pencil-fill"
                }`}
                onClick={() => {
                  props.changeTodo(props.index);
                  props.setIsEditMode(!props.isEditMode);
                  props.setEditIndex(props.index);
                }}
              ></Button>
              <Button
                type="button"
                className="me-1"
                variant="secondary"
                onClick={toggleCollapsed}
              >
                <i
                  className={
                    isCollapsed ? "bi bi-box-arrow-up" : "bi bi-box-arrow-down"
                  }
                />
              </Button>
              <Button
                type="button"
                className="me-1"
                variant={isDone ? "warning" : "success"}
                onClick={toggleDone}
              >
                <i
                  className={
                    isDone ? "bi bi-pencil-fill" : "bi bi-check-square-fill"
                  }
                />
              </Button>
              <Button
                type="button"
                variant="danger"
                onClick={() => {
                  props.deleteTodo(props.index);
                }}
              >
                <i className="bi bi-trash-fill" />
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className={!isCollapsed ? "d-none" : ""}>
          {props.description}
        </CardBody>
      </Card>
    </>
  );
};
