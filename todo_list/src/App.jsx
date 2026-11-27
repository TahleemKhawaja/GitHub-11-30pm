import { useState } from 'react';
import TodoForm from './components/TodoForm';

import Filters from './components/Filters';

import TodoList from './components/TodoList';

const initialTodos = [
  { id: 1, text: 'Learn JSX', done: true },
  { id: 2, text: 'Learn useState', done: false },
  { id: 3, text: 'Build a to-do app', done: false },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('all');
  function addTodo(text) {
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }]);
  }
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }
  // Values we can calculate, so they are NOT state
  const visibleTodos = todos.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });
  const remaining = todos.filter((t) => !t.done).length;
  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <Filters current={filter} onChange={setFilter} />
      <TodoList
        todos={visibleTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <div className="footer">
        <span>
          {remaining} {remaining === 1 ? 'task' : 'tasks'} left
        </span>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
}
export default App;
