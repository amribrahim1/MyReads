import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
    state = {
        book: {}
    }

    componentDidMount() {
        BooksAPI.get(this.props.book.id)
        .then((book) => {
            this.setState({book})
        })
    }

    updateBookShelf = (event) => {
        let one = this.state.book
        
        one.shelf = event.target.value
        this.setState({book:one})
        this.props.updateBookShelf(this.props.book,event.target.value);
        BooksAPI.update(one, event.target.value)
    }
    render() {
        const book = this.state.book
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        {book.imageLinks 
                            ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            : <div className="book-cover" style={{ width: 128, height: 193 }}>No thumbnail image available</div>
                        }
                        
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={this.updateBookShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors
                        ? book.authors.map(author => <div key={author} className="book-authors">{author}</div>)
                        : <div className="book-authors">{book.publisher}</div>
                    }                
                </div>
            </li>
        )
    }
}

export default Book