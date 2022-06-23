import React, { useSate } from 'react';
import TodoItem from './Item/TodoItem';

const data = [
  {
    id: 'wefw23',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    id: 'wefw23232',
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    id: 'wefw2qwefcev3',
    title: 'Send the finished assignment',
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useSate(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCmpleted = !current.isCmpleted;
    setTodos(copy);
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-centre mb-10">Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} />
      ))}
    </div>
  );
};

export default Home;
