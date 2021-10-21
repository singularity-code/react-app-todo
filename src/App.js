import React from 'react'
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
      </TodoTemplate>
    </div>
  )
}

export default App;
