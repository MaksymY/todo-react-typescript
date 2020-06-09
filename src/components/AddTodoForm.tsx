import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

const NewContent = styled.form`
  text-align: center;
`;
const InputTodo = styled.input`
  outline: none;
  display: block;
  border: none;
  background: none;
  border-bottom: 1px solid white;
  margin: 20px 0;
  color: white;

  &::placeholder {
    color: white;
  }
`;

const Add = styled.button`
  background-color: #ff5154;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  transition: 0.2s;
  outline: none;

  &:hover {
    box-shadow: 0 0 20px -1px rgb(255, 81, 84);
  }
`;

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo !== "") addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <NewContent>
      <InputTodo
        placeholder="Write her !"
        type="text"
        value={newTodo}
        onChange={handleChange}
      />
      <Add type="submit" onClick={handleSubmit}>
        Add Todo
      </Add>
    </NewContent>
  );
};
