# Contributing to Foothold Finder

First off, thank you for considering contributing to Foothold Finder! We appreciate your effort and interest in improving this project. This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents

- [Contributing to Foothold Finder](#contributing-to-foothold-finder)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Pull Requests](#pull-requests)
  - [Styleguides](#styleguides)
    - [Git Commit Messages](#git-commit-messages)
    - [JavaScript Styleguide](#javascript-styleguide)

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please make sure to read and follow it.

## How Can I Contribute?

### Reporting Bugs

If you find a bug in Foothold Finder, please open a new issue in the GitHub repository. Make sure to include a clear title and description, as well as steps to reproduce the issue.

### Suggesting Enhancements

To suggest a new feature or enhancement, open a new issue on the GitHub repository. In your issue, include a clear title and description, as well as any relevant context or examples that can help explain the value of your suggestion.

### Pull Requests

1. Fork the repository and create your branch from the `main` branch.
2. Make your changes, following the project's coding standards and style guides.
3. Ensure that your code is well-documented and tested.
4. Commit your changes with a descriptive commit message, adhering to the commit message guidelines.
5. Push your branch to your fork on GitHub.
6. Open a pull request against the `main` branch of the original repository.

Please note that the maintainers of this project reserve the right to accept or reject pull requests at their discretion.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.
- Consider starting the commit message with an applicable emoji:
    - 🎨 when improving the format/structure of the code.
    - 🐛 when fixing a bug.
    - 📚 when adding or updating documentation.
    - 🌐 when dealing with internationalization or localization.
    - 💡 when adding a new feature or enhancement.
    - 🔧 when working on a build process or tooling.
    - 🚀 when deploying a new version.
    - 🧪 when adding or updating tests.

### JavaScript Styleguide

Foothold Finder uses the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some modifications. Please make sure your code follows this style guide.

You can use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to automatically format your code and catch style issues. The project is already configured to use these tools, so you only need to run the following command to lint and format your code:
