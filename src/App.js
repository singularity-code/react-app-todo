import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Do something',
      checked: true,
    },
    {
      id: 2,
      text: 'Do next',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos}></TodoList>
      </TodoTemplate>
    </div>
  );
};

export default App;
