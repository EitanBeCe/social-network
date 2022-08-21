import React, { useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// const _emailValid =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Instead .includes('@')

const Login: React.FC<{
  onLogin: (email: string, password: string) => void;
}> = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const [isRegistered, setIsRegistered] = useState(true);
  const secondPassRef = useRef<HTMLInputElement>(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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
    // Log in if registered
    if (isRegistered) {
      onLogin(enteredEmail, enteredPassword);
    }
    // Alert if not registered and passwords do not match
    if (enteredPassword !== secondPassRef.current!.value) {
      setPasswordsMatch(false);
      return;
    }
    // Log in if pass match
    onLogin(enteredEmail, enteredPassword);
  };

  // Register block
  const registerHandler = () => {
    setIsRegistered(false);
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
        {!isRegistered && (
          <div className={classes.control}>
            <label htmlFor="password2">Repeat the Password</label>
            <input
              type="password2"
              id="password2"
              ref={secondPassRef}
              // value={enteredPassword}
              // onChange={passwordChangeHandler}
              required
            />
          </div>
        )}
        {!isRegistered && !passwordsMatch && (
          <h4 className={classes['pass-not-match']}>Passwords do not match</h4>
        )}
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
            onClick={submitHandler}
          >
            {isRegistered ? 'Login' : 'Sign up'}
          </Button>
        </div>
      </form>
      {isRegistered && <h3 onClick={registerHandler}>Not registred yet?</h3>}
    </Card>
  );
};

export default Login;
