- Simple social app:

1. Login screen with fields: Email and Password; and button to open registration screen
2. Registration screen with fields: Email, Password, Password repeat, Back button. (fields must be verified)
3. Main User screen (Posts View), with logout button, Posts View (list of posts) screen must include possibility to add new post and to edit
   and remove existing posts
4. Post View Screen (title, text, comments (count, list, new comment form)
5. Adding a new Post Screen (title, text, submit button)
6. Comments Screen (in Post View Screen), (remove, edit, add new)
7. Edit Comment Screen
8. Add & Edit Post Screen

- Modal on deleting posts

What was used:

- TS interfaces and types
- React - useContext, useState, useEffect
- Removed modals dependencies?
- firebase?

Marks for myself for curr work

1. If deleting posts from modal - it's removing the wrong post, always the last. MAYBE context will help
2. setModalOpen in posts-context - do not work
3. To do firebase? Routes? Auth status now in localStorage - ?

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
