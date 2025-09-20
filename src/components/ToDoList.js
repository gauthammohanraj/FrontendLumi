import React, { useState } from 'react';

export default function ToDoList() {
  // TODO 1: create a state variable `tasks` (array) and its setter
  // e.g. const [tasks, setTasks] = useState([]);

  // TODO 2: create a state variable `draft` (string) and its setter
  // e.g. const [draft, setDraft] = useState('');

  // TODO 3: write `add()` function that:
  //    - prevents blank drafts
  //    - appends `draft` to `tasks`
  //    - clears `draft`

  // TODO 4: write `remove(idx)` function that:
  //    - removes the task at index `idx` from `tasks`

  return (
    <div>
      <h2>My To-Do List</h2>

      <div>
        <input
          type="text"
          placeholder="New task…"
          // TODO 5: bind `value` to your `draft` state
          // TODO 6: onChange should update `draft` with the new input
        />
        <button
          // TODO 7: onClick should call your `add()` function
        >
          Add
        </button>
      </div>

      <ul>
        {
        }
        {tasks.map((task, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
              borderBottom: '1px solid #eee'
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => remove(i)}
              aria-label={`Remove task ${task}`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                lineHeight: 1
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}