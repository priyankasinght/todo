import React, { useState } from 'react';
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>TO-DO List</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <TodoItems
          key={index}
          index={index}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
