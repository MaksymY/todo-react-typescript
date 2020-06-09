import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem = ({ todo, toggleTodo }: TodoListItemProps) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
