# Create React web Application

Create React apps with no build configuration.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/leogong99/light/issues/new).

## Quick Overview

```sh
npm i
npm start
```

Then open [http://localhost:8080/](http://localhost:8080/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.


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

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## Philosophy




## License
ISC
