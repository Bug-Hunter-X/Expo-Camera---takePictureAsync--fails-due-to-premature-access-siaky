# Expo Camera `takePictureAsync` Error: Premature Access

This repository demonstrates a common error when using the Expo Camera API's `takePictureAsync` method: calling it before the camera has finished initializing.  The provided `bug.js` file reproduces the issue.  `bugSolution.js` shows how to correctly handle camera initialization using asynchronous operations to prevent this error.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `expo start`.
4. Observe the console; you will likely see an error related to `takePictureAsync` failing due to a null or undefined camera object.

## Solution

The `bugSolution.js` file demonstrates how to use a state variable to track the camera's ready status and only attempt to take a picture once the camera is initialized successfully.