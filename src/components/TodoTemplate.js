import './TodoTemplate.scss';

import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <p>* Sample App to demo component optimization and SCSS</p>
      <div className="app-title">TODO LIST</div>
      <div className="content">{children}</div>
      <p>DL Project</p>
    </div>
  );
};

export default TodoTemplate;
