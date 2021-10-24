import './TodoInsert.scss';
import React from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <div>
      <form className="TodoInsert">
        <input placeholder="Insert new TODO Item"></input>
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
