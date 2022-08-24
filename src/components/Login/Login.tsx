import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import ButtonSmall from '../UI/ButtonSmall/ButtonSmall';

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  // Login mode - states
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  // Sign up mode - states
  const [isRegistered, setIsRegistered] = useState(true);
  const [enteredPass2, setEnteredPass2] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // ********* Login mode *********

  // Email validation
  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredEmail(event.currentTarget.value);

    setFormIsValid(
      event.currentTarget.value.includes('@') &&
        enteredPassword.trim().length > 6
    );
  };

  // Password validation
  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredPassword(event.currentTarget.value);

    setFormIsValid(
      event.currentTarget.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  // Form submit
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Log-in if registered
    if (isRegistered) {
      onLogin(enteredEmail, enteredPassword);
      return;
    }
    // Alert if not registered and passwords do not match
    if (enteredPassword !== enteredPass2) {
      setPasswordsMatch(false);
      return;
    }
    // Log in if passwords match
    onLogin(enteredEmail, enteredPassword);
  };

  // ********** Sign up mode ************

  // Entering Sign up mode
  const registerHandler = () => {
    setIsRegistered(false);
  };

  // 2 passwords validation
  const pass2ChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredPass2(event.currentTarget.value);
  };

  // Comparasion of passwords in 'Sign up mode'. Alert user if passwords do not match
  useEffect(() => {
    if (enteredPassword !== enteredPass2) {
      setPasswordsMatch(false);
    }
    if (enteredPassword === enteredPass2) {
      setPasswordsMatch(true);
    }
  }, [enteredPassword, enteredPass2]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            required
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            minLength={7}
            maxLength={10}
            placeholder="7-10 signs"
          />
        </div>

        {!isRegistered && (
          <div className={classes.control}>
            <label htmlFor="password2">Repeat the Password</label>
            <input
              required
              type="password"
              id="password2"
              value={enteredPass2}
              onChange={pass2ChangeHandler}
            />
          </div>
        )}

        {!isRegistered && !passwordsMatch && (
          <h4 className={classes['pass-not-match']}>Passwords do not match</h4>
        )}

        {isRegistered && (
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        )}

        {!isRegistered && (
          <div className={classes.actions}>
            <ButtonSmall
              className={classes.btn}
              onClick={() => setIsRegistered(true)}
            >
              Go Back
            </ButtonSmall>
            <ButtonSmall
              type="submit"
              className={classes.btn}
              disabled={!formIsValid || !passwordsMatch}
              onClick={submitHandler}
            >
              Sign up
            </ButtonSmall>
          </div>
        )}
      </form>

      {isRegistered && <h3 onClick={registerHandler}>Not registred yet?</h3>}
    </Card>
  );
};

export default Login;
