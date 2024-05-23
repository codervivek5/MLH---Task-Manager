import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
