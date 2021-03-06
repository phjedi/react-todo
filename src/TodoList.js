import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList({ items, parent = null }) {
  if (!items) {
    return false;
  }

  items = items.filter(item => item.parent === parent).sort((a, b) => {
    if (a.completed && b.completed) return a.id < b.id ? -1 : 1;
    if (a.completed) return 1;
    if (b.completed) return -1;
    return a.id < b.id ? -1 : 1;
  });

  return (
    <ul>
      {items.map(item => <TodoItem
        key={item.id}
        item={item}
      />)}
    </ul>
  );
}

export default connect(
  state => ({
    items: state.todoList.items,
  })
)(TodoList);
