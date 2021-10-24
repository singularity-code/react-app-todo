import {
  AiOutlineCheck,
  MdDone,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

import React from 'react';

const TodoListITem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdDone></MdDone>
        <div className="text">TO DO</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default TodoListITem;
