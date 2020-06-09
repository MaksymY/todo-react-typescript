import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

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

  return (
    <>
      <h1>Hello World</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
