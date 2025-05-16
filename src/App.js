import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { username: 'Sibsankar Sahoo', role: 'Developer', region: 'East' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', role: '', region: '' });

  const submitData = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ username: '', role: '', region: '' });
  };

  const userSelect = (user) => {
    setSelectedUser(user);
  };

  const formData = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className='page-wrpr'>
      <section className='form-section'>
        <h2>Add User</h2>
        <form onSubmit={submitData}>
          <label>Username:</label>
          <input type="text" name="username" value={newUser.username} onChange={formData} />
          <label>Role:</label>
          <input type="text" name="role" value={newUser.role} onChange={formData} />
          <label>Region:</label>
          <input type="text" name="region" value={newUser.region} onChange={formData} />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Users list</h2>
        <ul className='userlist'>
          {users.map((user, index) => (
            <li key={index} onClick={() => userSelect(user)}>
             {user.username}
            </li>
          ))}
        </ul>
      </section>
      {selectedUser && (
        <section>
          <h2>User Info</h2>
          <p>Username: {selectedUser.username}</p>
          <p>Role: {selectedUser.role}</p>
          <p>Region: {selectedUser.region}</p>
        </section>
      )}
    </div>
  );
}

export default App;
