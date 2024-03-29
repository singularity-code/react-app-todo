import React, { useRef, useCallback, useReducer } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1,
  },
  wordsPerSentence: {
    max: 5,
    min: 2,
  },
});

function createBulkList() {
  const array = [];
  for (let i = 1; i <= 1000000; i++) {
    array.push({
      id: i,
      text: `Todo ${i}: ${lorem.generateSentences(1)}`,
      checked: false,
    });
  }
  return array;
}

// Optimization
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id
          ? {
            ...todo,
            checked: !todo.checked,
          }
          : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // with reducer
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkList);
  // without reducer
  // const [todos, setTodos] = useState(createBulkList);
  const nextId = useRef(1000001);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // without reducer
    //setTodos((todos) => todos.concat(todo));
    // with reducer
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
  }, []);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
};

export default App;
