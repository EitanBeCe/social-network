Simple social App on React and TypeScript:

1. Login screen with fields: Email, Password and option to open registration screen
2. Registration screen with fields: Email, Password, Password repeat, Back button. (fields are verified)
3. Possibility to add a new post, to edit and remove existing posts
4. Adding and Editing Posts Screen (title, text, submit and close buttons). Modal with "do you want to delete" check
5. Possibility to put likes on posts
6. Responsive template from 320px

![Alt text](/src/img/react_ts.png?raw=true 'Optional Title')

/

What was used/done:

- TS annotations and types. Props interfaces.
- React - useContext, useState, useEffect
- ReactModal
- localStorage
- uuid
- Responsive template
- CSS modules
- 2 can switch between color themes in index.css

/

Marks for myself for possible future additional tasks:

1. To do comments and comment edit?
2. To do firebase (Now initial posts are heardcoded, auth status now in localStorage)? Routes (now everything is on one link)?
3. Tests?)
4. Reducer?
5. Likes animation?
6. Make theme toggler like here https://www.youtube.com/watch?v=G00V4tRx1ME or here https://www.youtube.com/watch?v=VMF1i5I2imE

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
