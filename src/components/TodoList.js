import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editingId: PropTypes.number,
  setEditingId: PropTypes.func.isRequired,
  editingText: PropTypes.string,
  setEditingText: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map(todo => (
        <li key={todo.id} className="todo-item">
          {props.editingId === todo.id ? (
            <input
              className="todo-input edit"
              value={props.editingText}
              onChange={(e) => props.setEditingText(e.target.value)}
              onBlur={() => props.updateTodo(todo.id, props.editingText)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') props.updateTodo(todo.id, props.editingText);
                if (e.key === 'Escape') props.setEditingId(null);
              }}
              autoFocus
            />
          ) : (
            <label onDoubleClick={() => {
              props.setEditingId(todo.id);
              props.setEditingText(todo.text);
            }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => props.toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </label>
          )}
          <button onClick={() => props.deleteTodo(todo.id)} className="delete-btn">&times;</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
