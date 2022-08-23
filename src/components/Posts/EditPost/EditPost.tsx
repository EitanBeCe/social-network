import React from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './EditPost.module.css';

interface Props {}

const EditPost: React.FC<Props> = () => {
  // Form submit
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // // Log-in if registered
    // if (isRegistered) {
    //   onLogin(enteredEmail, enteredPassword);
    //   return;
    // }
    // // Alert if not registered and passwords do not match
    // if (enteredPassword !== enteredPass2) {
    //   setPasswordsMatch(false);
    //   return;
    // }
    // // Log in if pass match
    // onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            id="title"
            // value={enteredEmail}
            // onChange={emailChangeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            id="text"
            // value={enteredPassword}
            // onChange={passwordChangeHandler}
            minLength={7}
            maxLength={10}
            placeholder="7-10 signs"
          />
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} onClick={submitHandler}>
            Edit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default EditPost;
