import TodoListItem from './TodoListItem';
import './TodoList.scss';

import React from 'react';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
    </div>
  );
};

export default TodoList;
