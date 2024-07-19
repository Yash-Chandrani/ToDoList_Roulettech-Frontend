import React, { useState } from 'react';
import AuthTabs from './components/AuthTabs';
import TaskList from './components/TaskList';
import NavigationBar from './components/Navbar';
import ChangePassword from './components/ChangePassword';
import DeleteAccount from './components/DeleteAccount';
import { Container } from 'react-bootstrap';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    setToken(token);
  };

  return (
    <div>
      <NavigationBar setToken={setAuthToken} setShowChangePassword={setShowChangePassword} setShowDeleteAccount={setShowDeleteAccount} token={token} />
      <Container className="mt-4">
        {token ? (
          <>
            <TaskList token={token} />
            <ChangePassword show={showChangePassword} handleClose={() => setShowChangePassword(false)} token={token} />
            <DeleteAccount show={showDeleteAccount} handleClose={() => setShowDeleteAccount(false)} setToken={setAuthToken} token={token} />
          </>
        ) : (
          <AuthTabs setToken={setAuthToken} />
        )}
      </Container>
    </div>
  );
};

export default App;
