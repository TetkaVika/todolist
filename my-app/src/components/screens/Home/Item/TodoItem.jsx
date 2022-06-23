import React from 'react';
import Check from './Check';

const TodoItem = ({ todo, changeTodo }) => {
  return (
    <div
      className="flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full"
      onClick={() => changeTodo(todo.id)}
    >
      <Check />
      {todo.title}
    </div>
  );
};

export default TodoItem;
