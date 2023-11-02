# React UI Kit

[Latest version of material/core].

## Installation

### Install peer-dependencies

This package has the following peer-dependencies:

```
"@emotion/react": "^11.9.3"
"@emotion/styled": "^11.8.1"
"@mui/material": "^5.8.7"
"react": "^18.2.0"
"react-dom": "^18.2.0"
```

You can install them with the following command

```
npm install @emotion/react@^11.9.3 @emotion/styled@^11.8.1 @mui/material@^5.8.7 react@^18.2.0 react-dom@^18.2.0
```

### Install library

Install latest version with the following command

```
npm install @material/core
```

### Use INTER font

Usually at the same level you provide the theme.

```
import '@material/core/dist/fonts/Inter/inter.css';
```

### Pick your theme

```
import { themes } from "@material/core";

// It exposes an object with the available themes.
1. themes.light
2. themes.dark
```

### Provide theme

You can provide the theme at any level on your project. Here is an example of providing it at the application's root level.

```
import { themes } from '@material/core';
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@material/core/dist/index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themes.dark}>
            <ScopedCssBaseline>
                <App />
            </ScopedCssBaseline>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
```

## Usage

```
import { mButton } from "@material/core";
...

export const TestComponent = (props: TestComponentProp) => {
  ...

  return (
    <>
      ...
      <MButton label={props.label} onClick={() => console.log("clicked!")} />
      ...
    </>
  );
};
```

## Support

Raised your concerns to your line manager and/or ask to be involved in material/core catchups.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

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
