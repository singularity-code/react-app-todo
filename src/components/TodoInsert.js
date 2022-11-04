import './TodoInsert.scss';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      // Submit trigger refresh page
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );

  return (
    <div>
      <form className='TodoInsert' onSubmit={onSubmit}>
        <input
          placeholder='Insert new TODO item'
          value={value}
          onChange={onChange}
        ></input>
        <button type='submit'>
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
