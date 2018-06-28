import React, { Component } from 'react'

class Bookshelf extends Component {

	render() {
		const { bookShelfBooks } = this.props
		return (
			<div>
				<div className="bookshelf">
				  <h2 className="bookshelf-title">Currently Reading</h2>
				  <div className="bookshelf-books">
				    <ol className="books-grid">

					    { bookShelfBooks.filter( book => book.shelf === 'currentlyReading').map( book =>
						      <li key={book.id}>
						        <div className="book">
						          <div className="book-top">
						            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
						            <div className="book-shelf-changer">
						              <select defaultValue={book.shelf}>
						                <option value="move" disabled>Move to...</option>
						                <option value="currentlyReading">Currently Reading</option>
						                <option value="wantToRead">Want to Read</option>
						                <option value="read">Read</option>
						                <option value="none">None</option>
						              </select>
						            </div>
						          </div>
						          <div className="book-title">{book.title}</div>
						          {book.authors.map( author => <div key={author} className="book-authors">{author}</div>)}
						        </div>
						      </li>
					      )
					  	}

				    </ol>
				  </div>
				</div>
				<div className="bookshelf">
				  <h2 className="bookshelf-title">Want to Read</h2>
				  <div className="bookshelf-books">
				    <ol className="books-grid">

					    { bookShelfBooks.filter( book => book.shelf === 'wantToRead').map( book =>
						      <li key={book.id}>
						        <div className="book">
						          <div className="book-top">
						            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
						            <div className="book-shelf-changer">
						              <select defaultValue={book.shelf}>
						                <option value="move" disabled>Move to...</option>
						                <option value="currentlyReading">Currently Reading</option>
						                <option value="wantToRead">Want to Read</option>
						                <option value="read">Read</option>
						                <option value="none">None</option>
						              </select>
						            </div>
						          </div>
						          <div className="book-title">{book.title}</div>
						          {book.authors.map( author => <div key={author} className="book-authors">{author}</div>)}
						        </div>
						      </li>
					      )
					  	}

				    </ol>
				  </div>
				</div>
				<div className="bookshelf">
				  <h2 className="bookshelf-title">Read</h2>
				  <div className="bookshelf-books">
				    <ol className="books-grid">

					    { bookShelfBooks.filter( book => book.shelf === 'read').map( book =>
						      <li key={book.id}>
						        <div className="book">
						          <div className="book-top">
						            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
						            <div className="book-shelf-changer">
						              <select defaultValue={book.shelf}>
						                <option value="move" disabled>Move to...</option>
						                <option value="currentlyReading">Currently Reading</option>
						                <option value="wantToRead">Want to Read</option>
						                <option value="read">Read</option>
						                <option value="none">None</option>
						              </select>
						            </div>
						          </div>
						          <div className="book-title">{book.title}</div>
						          {book.authors.map( author => <div key={author} className="book-authors">{author}</div>)}
						        </div>
						      </li>
					      )
					  	}

				    </ol>
				  </div>
				</div>
			</div>
		)
	}
}

export default Bookshelf

