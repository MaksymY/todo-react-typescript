import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import styled from "styled-components";

const Content = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
  font-family: "Nanum Gothic", sans-serif;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

const Title = styled.h1`
  color: #ff5154;
  text-shadow: 0 0 10px rgb(255, 81, 84);
  letter-spacing: 5px;
`;

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write app", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <Content>
      <Title>TODO LIST</Title>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Content>
  );
}

export default App;
