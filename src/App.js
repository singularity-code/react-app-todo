import React from 'react'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </TodoTemplate>
    </div>
  )
}

export default App;
