import React from "react";
import { FaTrash } from "react-icons/fa"
import { TodoUpdate } from "./TodoUpdate";
import { Button, Checkbox } from '@chakra-ui/react'
export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <Checkbox onChange={() => handleCompleteTodo(todo.id)} />
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <Button
        className='btn-delete'
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <FaTrash />
      </Button>
    </li>
  );
};
