import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState({books})
        })
    }

    updateBookShelf = (book,shelf) => {
        let books = this.state.books;
        const inBooks = books.find(one => one.id===book.id);
        if (inBooks) {
            inBooks.shelf = shelf
        } else {
            book.shelf=shelf;
            books.push(book)
        }
        this.setState({books})
    }

    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <Search
                        updateBookShelf={this.updateBookShelf}
                    />
                )} />
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                        updateBookShelf={this.updateBookShelf}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp
