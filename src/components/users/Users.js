import React, { useState } from 'react';
import AddNewUser from './AddNewUser';
import UserList from './UserList';

const Users = (props) => {
  const [details, setDetails] = useState({ username: '', age: '' });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      details['username'].trim().length === 0 ||
      details['age'].trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+details['age'] < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter valid age (> 0)',
      });
      return;
    }

    setUsers((previous) => {
      return [...previous, details];
    });
    setDetails({ username: '', age: '' });
  };

  const eventListenHandler = (event) => {
    const { name, value } = event.target;

    setDetails((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const modalCancelHandler = () => {
    setError();
  }

  return (
    <>
      <AddNewUser
        onCancel={modalCancelHandler}
        error={error}
        details={details}
        addUserHandler={addUserHandler}
        eventListenHandler={eventListenHandler}
      />
      <UserList users={users} />
    </>
  );
};

export default Users;
