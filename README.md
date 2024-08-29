# SNET-dapp-components

<img width="50%" src="./src/assets/images/WhiteLogo.svg" alt="logo"/>
<br/>
<br/>
This is a library with components that you can use to develop a user interface for artificial intelligence services for:

- AI service for Marketplace
- Marketplace
- Publisher
- Staking

## Installation and Usage

### Prerequisites

Node.js version:

- ^18.18.0
- ^20.9.0
- \>= 21.1.0

### Installing

```shell
npm install snet-dapp-components
```

### Usage

Import components for using in your project:

```js
import AlertBox from "snet-components-dapp/components/AlertBox";
```

The components use your MUI theme, but if you are developing an artificial intelligence service for the Marketplace, then the Marketplace theme will be used

## For development

1. install this project
2. install dependencies

```
npm install
```

3. after creating a new component, make sure that you have imported it into `/components/index.ts`

## Available Scripts for contributing

In the project directory, you can use:

### `npm run rollup`

Builds the dist file after some changes in repository.

### `npm run storybook`

Run test components
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `lint` and `lint:fix`

Run eslint
