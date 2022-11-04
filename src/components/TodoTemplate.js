import './TodoTemplate.scss';

import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <p>* Sample Application to demo component optimization and SCSS</p>
      <div className='app-title'>TODO LIST</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;
