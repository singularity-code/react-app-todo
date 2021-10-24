import TodoListItem from './TodoListItem';
import './TodoList.scss';

import React from 'react';
import TodoInsert from './TodoInsert';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id}></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
