import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends React.Component {
    state = {
        showingBooks: [],
        errMessage:""
    }
    
    updateQuery = (query) => {
        if (query==='') {
            this.setState({showingBooks: []})
        } else {
            BooksAPI.search(query)
            .then((showingBooks) => {
                showingBooks.error
                ? this.setState({showingBooks:[], errMessage:"No results found"})
                : this.setState({showingBooks:showingBooks, errMessage:""})
            })
        }
    }
    renderBooks() {
        if (this.state.query==='') {
            return this.setState({showingBooks: []})
        } else {
            return BooksAPI.search(this.state.query)
            .then((showingBooks) => {
                showingBooks.error
                ? this.setState({showingBooks:[], errMessage:"No results found"})
                : this.setState({showingBooks:showingBooks, errMessage:""})
            })
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                    >close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.showingBooks.map(oneBook => <Book updateBookShelf={this.props.updateBookShelf} key={oneBook.id} book={oneBook}/>)}
                        {this.state.errMessage}  
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search