import { useState } from 'react';
function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed === '') return; // do not add empty tasks
    onAdd(trimmed);
    setText(''); // clear the input
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default TodoForm;
