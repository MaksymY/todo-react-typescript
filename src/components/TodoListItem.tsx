import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style-type: none;
  padding: 5px;
  color: white;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem = ({ todo, toggleTodo }: TodoListItemProps) => {
  return (
    <Item>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <Checkbox
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </Item>
  );
};
