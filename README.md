# MyReads Project

### https://myreads-react-udacity.netlify.app/

This is a bookshelf app that allows user to select and categorize books user have read, are currently reading, or want to read.

The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets user select the shelf for that book. When user65522 select a different shelf, the book moves there.

The search page has a text input that may be used to find books and add them to user's books shelves.

## Project uses

The project emphasizes using React to build the application and provides an API server and client library that user will use to persist information as you interact with the application.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── ListBooks.js # This is a component renders list of books in user's shelfs.
    ├── Book.js # This is a component renders the book displayed.
    ├── Search.js # This is a component renders search page for adding new books.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js
```
#### This projec is the first project of ([Udacity React Developer Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019)) course.
