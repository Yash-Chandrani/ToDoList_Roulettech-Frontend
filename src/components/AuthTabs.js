import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

const AuthTabs = ({ setToken }) => {
  const [key, setKey] = useState('login');

  return (
    <Container>
      <Tabs
        id="auth-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="login" title="Login">
          <Login setToken={setToken} />
        </Tab>
        <Tab eventKey="register" title="Register">
          <Register setToken={setToken} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AuthTabs;
