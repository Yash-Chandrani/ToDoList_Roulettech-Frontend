import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { Modal, Button, Alert } from 'react-bootstrap';

const DeleteAccount = ({ show, handleClose, token, setToken }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDelete = async () => {
    try {
      await axiosInstance.delete('/api/delete-account/', { headers: { Authorization: `Token ${token}` } });
      setSuccess('Account deleted successfully');
      setError('');
      setToken(null);
      handleClose();
    } catch (error) {
      setError('Failed to delete account');
      setSuccess('');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Button variant="danger" onClick={handleDelete}>
          Confirm Delete
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteAccount;
