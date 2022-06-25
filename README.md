# Building by Redux Documentation recomendations | Code Quality : https://redux.js.org/usage/usage-with-typescript

    This repo follows the documentation for Redux | Usage with TypeScript : https://redux.js.org/usage/usage-with-typescript

This repo includes some key changes listed below :

    1.) created types for RootState and AppDispatch located in store/index.js
    2.) created hooks for useAppSelectors and useAppDispatch
    3.) Added types RootState and AppDispatch to useAppSelector and useAppDispatch. This is so that the selector and dispatch do not need to get created in any components that use it and more importantly, this ensures every component is accessing the same selector and dispatch. This also ensures that types are assigned once.
    4.) implemented extraReducers from object to a callback that leverages builder arg.

# Getting Started with React + TypeScript, eslint, prettier, and Material Ui

(Note: this broiler also has a version with MaterialUi)

This is a simple broiler plate made with create-react-app.
It includes, TypeScript, eslint, and prettier.

The linting script will:
a.) run eslint rules
b.) run prettier and reformat the code based on the eslint rules.

The broilerplate also has the vscode configurations to run eslint and prettier on saving changes to files.
In case this feature isn't working, you may need to check that the vscode configutions are set.
see : https://linuxhint.com/enable-linting-eslint-visual-studio-code/ under the section: # How to Enable Linting on Save

In the terminal, simply run:

# ESLINT

## `npm run lint`

# PRETTIER

## `npm run format`

The boilerplate also has the vscode configurations to run eslint and prettier on saving changes to files.
In case this feature isn't working, you may need to check that the vscode configutions are set.
see : https://linuxhint.com/enable-linting-eslint-visual-studio-code/ under the section: # How to Enable Linting on Save

## Material Ui

A theme provider is included and a styled component for the LandingContainer which can be found in src/components/Landing/styled.
Both of these pieces are in the boiler plate to show which props do what.
