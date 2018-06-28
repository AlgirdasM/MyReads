import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelf from './Bookshelf'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  updateBookshelf = (book, shelf) => {
    // apply new shelf to book
    book.shelf = shelf
    // update state and api
    if(shelf === 'none') {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id)
      }))
      BooksAPI.update(book, shelf)
    } else if(shelf === 'currentlyReading' ||
              shelf === 'wantToRead' ||
              shelf === 'read') {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
      BooksAPI.update(book, shelf)
    } else {
      console.log(`Error, ${shelf} shelf doesn't exist.`)
    }
    
  }

  render() {
    return (
      <div className="app">

          <Route exact path="/" render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">

                  <Bookshelf update={this.updateBookshelf} bookShelfBooks={this.state.books}/>

                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />

          <Route path="/search" render={() => (
              <Search bookShelfBooks={this.state.books} update={this.updateBookshelf} />
            )}
          />

      </div>
    )
  }
}

export default BooksApp
