import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';
import axiosInstance from '../axiosConfig';
import { Container, ListGroup } from 'react-bootstrap';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/tasks/', { headers: { Authorization: `Token ${token}` } })
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, [token]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} token={token} />
      <ListGroup>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} token={token} removeTask={removeTask} updateTask={updateTask} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
