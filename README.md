# SNET-dapp-components

<img width="50%" src="./src/assets/images/BlackLogo.svg" alt="logo"/> <br/>

## Overview

**SNET Dapp Components** - is a comprehensive library designed to simplify the development of user interfaces for various artificial intelligence services. This versatile collection of components is tailored for:

- **AI service for Marketplace**
- **Marketplace**
- **Publisher**
- **Staking**

This library is crafted to be both flexible and powerful, integrating seamlessly with your existing design system.

## Installation and Usage

### Prerequisites

Ensure your development environment meets the following Node.js version requirements:

| Version Node.js | Support |
| --------------- | ------- |
| ^18.18.0        | ✅ Yes  |
| ^20.9.0         | ✅ Yes  |
| >= 21.1.0       | ✅ Yes  |

### Installing the Library

To install the SNET Dapp Components library, run the following command in your project directory:

```shell
npm install snet-dapp-components
```

### Using the Components

Once installed, you can easily import and use the components in your project. Here's a simple example:

```js
import AlertBox from "snet-dapp-components/components/AlertBox";
```

<div style="background-color:#f9f9f9; padding:15px; border-left:5px solid #4CAF50;">
    <strong>Note:</strong> These components are designed to automatically adapt to your Material-UI (MUI) theme. However, if you're developing an AI service specifically for the Marketplace, the components will adopt the Marketplace's predefined theme, ensuring a consistent look and feel. Make sure your theme is aligned with the configurations specified in the <a href="./src/assets/ThemeTypes.d.ts" target="_blank">ThemeTypes.d.ts</a> file.
</div>

## Development Guide

If you're looking to contribute or customize components, follow these steps:

1. **Clone the repository** and navigate to the project directory.
2. **Install the required dependencies** by running:

```
npm install
```

3. When you create a new component, make sure to import it into /components/index.ts to make it available for use throughout the project.

## Available Scripts for Contribution

Here are some useful scripts to help you contribute to the project:

### `npm run rollup`

This script builds the distribution files after making changes to the repository. It's essential to run this command to ensure your changes are correctly compiled.

### `npm run storybook`

Run this command to launch **Storybook**, an interactive environment for testing components. Once running, open [http://localhost:6006](http://localhost:6006) in your browser to view and interact with your components.

### `lint` and `lint:fix`

Ensure your code adheres to the project's coding standards by running:

- **lint**: checks your code for style and formatting issues
- **lint:fix**: automatically fixes linting issues where possible

---

By following this guide, you can seamlessly integrate SNET Dapp Components into your project, contribute to its development, and leverage its powerful features to build robust and visually appealing interfaces for AI services.
