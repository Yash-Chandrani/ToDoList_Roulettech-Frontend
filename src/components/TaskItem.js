import React from 'react';
import axiosInstance from '../axiosConfig';
import { ListGroupItem, Button, Form } from 'react-bootstrap';

const TaskItem = ({ task, token, removeTask, updateTask }) => {
  const toggleCompletion = async () => {
    try {
      const response = await axiosInstance.put(`/api/tasks/${task.id}/`, { ...task, completed: !task.completed }, { headers: { Authorization: `Token ${token}` } });
      updateTask(response.data);
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const deleteTask = async () => {
    try {
      await axiosInstance.delete(`/api/tasks/${task.id}/`, { headers: { Authorization: `Token ${token}` } });
      removeTask(task.id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      <Form.Check
        type="checkbox"
        label={task.title}
        checked={task.completed}
        onChange={toggleCompletion}
        className={task.completed ? 'text-decoration-line-through' : ''}
      />
      <Button variant="danger" size="sm" onClick={deleteTask}>Delete</Button>
    </ListGroupItem>
  );
};

export default TaskItem;
