import React from 'react';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';

const NavigationBar = ({ setToken, setShowChangePassword, setShowDeleteAccount, token }) => {
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">ToDo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {token ? (
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  <i className="fas fa-user"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu align="right">
                  <Dropdown.Item onClick={() => setShowChangePassword(true)}>Change Password</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowDeleteAccount(true)}>Delete Account</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
