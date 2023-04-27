import React from 'react';

const TodoItems = ({ index, todo, handleCompleteTodo, handleDeleteTodo }) => {
  const handleComplete = () => {
    handleCompleteTodo(index);
  };

  const handleDelete = () => {
    handleDeleteTodo(index);
  };

  return (
    <div className="todo-item">
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <div className="buttons">
        {!todo.completed && (
          <button onClick={handleComplete}>Mark as Completed</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
