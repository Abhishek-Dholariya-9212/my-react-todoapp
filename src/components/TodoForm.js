import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
const TodoForm = ({ onAdd }) => {
  
  const [input, setInput] = useState('');
  const msg = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="todo-msg">{msg}</span>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
