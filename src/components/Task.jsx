import React from 'react';

const Task = ({ task, index, deleteTask }) => {
  return (
    <li>
      {task} <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default Task;
