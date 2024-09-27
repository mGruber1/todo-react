import { Col, Container, Row } from "react-bootstrap";
import { InputField } from "./components/todoList/inputField/InputField";
import { TodoItem } from "./components/todoList/todoItem/TodoItem";
import { TodoList } from "./components/todoList/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const changeTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, todoTitle: newTodoTitle } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App h-100 d-flex align-items-center">
      <TodoList>
        <Container fluid className="h-100 p-2">
          <Row className="h-25">
            <Col className="d-flex align-items-center h-100 d-flex justify-content-center">
              <InputField todos={todos} setTodos={setTodos}></InputField>
            </Col>
          </Row>
          <Row className="h-75 overflow-auto">
            <Col className="d-flex align-items-center flex-column">
              {todos.map((todo, index) => {
                return (
                  <TodoItem
                    title={todo.todoTitle}
                    description={todo.todoDescription}
                    key={index}
                    index={index}
                    deleteTodo={deleteTodo}
                    changeTodo={changeTodo}
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                    setNewTodoTitle={setNewTodoTitle}
                    editIndex={editIndex}
                    setEditIndex={setEditIndex}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </TodoList>
    </div>
  );
}

export default App;
