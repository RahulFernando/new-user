import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';

import classes from './AddUser.module.css';

const AddNewUser = (props) => {
  return (
    <>
      {props.error && (
        <ErrorModal
          title={props.error.title}
          message={props.error.message}
          onCancel={props.onCancel}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={props.addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            name="username"
            value={props.details['username']}
            type="text"
            onChange={props.eventListenHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            name="age"
            type="number"
            value={props.details['age']}
            onChange={props.eventListenHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddNewUser;
