import React, { useState } from 'react';

const AddTodo = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
