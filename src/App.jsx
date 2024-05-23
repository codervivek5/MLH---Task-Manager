import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
