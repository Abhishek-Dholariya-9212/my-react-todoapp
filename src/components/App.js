import React, { useState, useEffect,useRef } from 'react';
import '../App.css';
import TodoForm from '../components/TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import useToggle from '../hooks/FilterToggle';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodoContext } from '../context/TodoContext';
import { CSSTransition } from 'react-transition-group';

const TodoApp = () => {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [filter, setFilter] = useState('all');
  // const [name, setName] = useState('');
  const [showFilter, toggleFilter] = useToggle(true);
  // const nameInputEl = useRef(null);
  const filterRef = useRef(null); //
  const [name, setName] = useLocalStorage('name', '');
  const [todos, setTodos] = useLocalStorage('todos',[] 
    // [
    //   { id: 1, text: 'Finish React Series', completed: false },
    //   { id: 2, text: 'Go Grocery', completed: true },
    //   { id: 3, text: 'Take over world', completed: false },
    // ]
);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditingId(null);
    setEditingText('');
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  useEffect(() => {
    // nameInputEl.current.focus();
    console.log('Todos updated:');
    // setName(JSON.parse(localStorage.getItem('name')) ?? '');
  });
    
  function handleInputName(e) {
    setName(e.target.value);
    // localStorage.setItem('name', JSON.stringify(e.target.value));
  }

  return (
    <TodoContext.Provider value="Hello from Context use">
    <div className="todo-container">
      <div className='name-container'>
        <h2>What is your name?</h2>
        <form action=''>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className='todo-input' 
            value={name} 
            onChange={handleInputName}
          />
        </form>
        {name && <h3>Hello, {name}!</h3>}
      </div>
      <h1 className="todo-title">Todo App</h1>
      <TodoForm onAdd={addTodo} />
      {todos.length > 0 ? (
        <TodoList 
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editingId={editingId}
          setEditingId={setEditingId}
          editingText={editingText}
          setEditingText={setEditingText}
          updateTodo={updateTodo}
          setTodos={setTodos}
          clearCompleted={clearCompleted}
        />
      ) : (
        <div className="empty-todo">
          <p>No tasks available. Add a new task!</p>
        </div>
      )}
      <div className="todo-footer">
        <button
          onClick={() => setTodos(todos.map(todo => ({ ...todo, completed: true })))}
          className="check-all"
        >
          Check All
        </button>
        <span>{todos.filter(todo => !todo.completed).length} items remaining</span>
      </div>
      <button onClick={toggleFilter} className="toggle-filter-btn">
        {showFilter ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* {showFilter && ( */}
        <CSSTransition in={showFilter} timeout={300} classNames="fade" unmountOnExit nodeRef={filterRef}>
          <div className="todo-filters">
            <TodoFilter
              filter={filter}
              setFilter={setFilter}
              clearCompleted={clearCompleted}
            />
          </div>
        </CSSTransition>
      {/* )} */}
    </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
