import React from "react";
import { TodoListItem } from "./TodoListItem";
import styled from "styled-components";

const ListContent = styled.ul`
  padding: 0;
  max-height: 300px;
  overflow: auto;
`;

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <ListContent>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ListContent>
  );
};
