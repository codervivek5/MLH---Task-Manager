import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
