import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { Form, Button, Alert } from 'react-bootstrap';

const AddTaskForm = ({ addTask, token }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Title cannot be empty.');
      return;
    }
    try {
      const response = await axiosInstance.post('/api/tasks/', { title, completed: false }, { headers: { Authorization: `Token ${token}` } });
      addTask(response.data);
      setTitle('');
      setError('');
    } catch (error) {
      setError('Error adding task.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formTaskTitle">
        <Form.Label>New Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Add Task</Button>
    </Form>
  );
};

export default AddTaskForm;
