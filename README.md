# Tic Tac Toe with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Folder Structure

## `Layout` folder

`<Board />` Component is mainly to serve as a separation of business logic. All the states are stored in here and pass down to the children components as required. It is composed of two parts: `<Panel />` and `<Grid />`.

`<Panel />` is the menu at the top of the game board.

`<Grid />` is the UI representation of the tic-tac-toe board', which is a pure component.

## `Componets` folder

The component folder mainly contains pure components that is not composed of any other components

## `Utils` folder

The utils folder contains the logic to determine the winner and the test file.

# Q&A

## How much time did you spend on the challenge?

The whole day 🥲. I have spent quite a long time on writing Typescript (I'm pretty sure I didn't use it correctly but I did try) and debugging unit testing. There were some errors relating jest being not able to read svg files, I added the `jest.config.js` but seems it's not working. This leads to running `Panel.test.tsx` will get errors as result.

## What would you improve if you had more time to spend on this coding challenge?

1. Writing more test cases: Currently it's not enough to cover the basic functionality, so I need to find a way to solve the svg issue as mentioned above so I can add more test cases to meet a certain level of threshold.

2. Implementing 4th flow: can use `window.localStorage` to store the game stats as an object. For example:

```json
{
  x: 2,
  o: 3
  tie: 5,
}
```

Each time at the end of the game, update this object and increase the result to the corresponding field.

3. UI: add animation for button hovering and clicking event so it's more user-friendly

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

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
