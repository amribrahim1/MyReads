import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

const ListBook = props => {
    const {books, updateBookShelf} = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <ol className="books-grid">
                            {books.filter(book => book.shelf==="currentlyReading").map(oneBook => <Book updateBookShelf={updateBookShelf} key={oneBook.id} book={oneBook}/>)}  
                        </ol>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <ol className="books-grid">
                            {books.filter(book => book.shelf==="wantToRead").map(oneBook => <Book updateBookShelf={updateBookShelf} key={oneBook.id} book={oneBook}/>)}  
                        </ol>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <ol className="books-grid">
                            {books.filter(book => book.shelf==="read").map(oneBook => <Book updateBookShelf={updateBookShelf} key={oneBook.id} book={oneBook}/>)}  
                        </ol>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                >Add a book</Link>
            </div>
        </div>
    )
}

export default ListBook