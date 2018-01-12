## React NASA Images

This is a simple React project to search images using the [NASA Image and Video Library](https://api.nasa.gov/api.html#Images). I used the super handy [create-react-app](https://github.com/facebookincubator/create-react-app).

## Scripts

In the project directory, you can run:

### `npm install`

Neccesary to install all the project dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## TODO

* Add pagination. Possibly infinte scroll. For the moment just the first page is shown.
* Improve grid rendering (fix some weird flickering issues in Chrome).
* Be able to download images in original size (high resolution).
* Add other type of media assets, not just images, the API also offers images and audios. In this case also a video and audio player has to be implemented.
* Add end-to-end tests.
* Dockerize the project.
