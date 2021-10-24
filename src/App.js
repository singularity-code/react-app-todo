import React, { useState } from 'react'
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
    }
  ])
  return (
    <div>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList todos = {todos}></TodoList>
      </TodoTemplate>
    </div>
  )
}

export default App;
