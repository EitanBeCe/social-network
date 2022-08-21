import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login: React.FC<{
  onLogin: (email: string, password: string) => void;
}> = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredEmail(event.currentTarget.value);

    setFormIsValid(
      event.currentTarget.value.includes('@') &&
        enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredPassword(event.currentTarget.value);

    setFormIsValid(
      event.currentTarget.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            required
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
            onClick={submitHandler}
          >
            Login
          </Button>
        </div>
      </form>
      <h3>Not registred yet?</h3>
    </Card>
  );
};

export default Login;
