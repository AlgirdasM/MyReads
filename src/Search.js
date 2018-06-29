import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    query: '',
    apiBooks: []
  }

  updateQuery = (query) => {
    // update state
    this.setState({ query: query })

    // get books from api
    if (query && query.trim().length > 0) {
      BooksAPI.search(query.trim()).then((response) => {
        const bookShelfBooks = this.props.bookShelfBooks
        // handle response and error response
        if (response && !response.error){
          // add shelf value to books
          response.map(book => {
            // add to none shelf by default
            book.shelf = 'none'
            // if book is in our shelf, then update results
            return bookShelfBooks.filter(b => b.id === book.id && (book.shelf = b.shelf))
          })
          // update apiBooks state
          this.setState({ apiBooks: response })
        } else {
          this.clearQuery()
        }
      })
    } else {
      this.clearQuery()
    }
  }

  clearQuery = () => {
    console.log('clearing')
    this.setState({ apiBooks: [] })
  }

  render() {
    const { query, apiBooks } = this.state
    const { update } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

              { query && apiBooks.length > 0 && (
                  apiBooks.map( book =>
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={ book.imageLinks && ({ backgroundImage: `url("${book.imageLinks.thumbnail}")` }) }>
                          </div>
                          <div className="book-shelf-changer">

                            <select value={book.shelf} onChange={(e) => update(book, e.target.value)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>

                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors && (book.authors.map( author => <div key={author} className="book-authors">{author}</div>))}
                      </div>
                    </li>
                  )
                )
              }

          </ol>
        </div>
      </div>
    )
  }
}

export default Search