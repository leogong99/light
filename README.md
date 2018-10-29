# Create React web Application

Create React apps with no build configuration.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/leogong99/light/issues/new).

## Quick Overview

```sh
npm i
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg' width='600' alt='npm start'>
</p>

### Get Started Immediately

This project has already setup webpack, webpack-dev-server, react, babel-loader, css-loader and style loader for you. For detail of each package version, please see package.json.

## App Folder Tree

```
light
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .babelrc
├── .package-lock.json
├── .package.json
├── .webpack.config.js
├── dist
│   ├── index.html
│   └── main.js
└── src
    ├── index.html
    ├── index.js
    ├── search.css
    └── Search.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm run start`

Runs the app in development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## Philosophy




## License
ISC
