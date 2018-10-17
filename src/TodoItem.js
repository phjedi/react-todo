import React from 'react';
import TodoList from './TodoList';
import classNames from 'classnames';
import './TodoItem.css';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from './redux/actions';

function TodoItem({ item: { id, title, completed, sublist }, toggleTodo, removeTodo }) {
  return (
    <li>
      <label className={classNames({ 'TodoItem-completed': completed, 'form-check form-check-inline': true })}>
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed || false}
          onChange={() => toggleTodo(id)}
        />
        {title}
      </label>

      {completed && <a
        href="#remove"
        onClick={e => {
          e.preventDefault();
          removeTodo(id);
        }}
        className="TodoItem-remove"
      >Удалить</a>}

      <TodoList items={sublist}/>
    </li>
  );
}

export default connect(
  null,
  { toggleTodo, removeTodo },
)(TodoItem);
