import React, { Component } from 'react'

class Bookshelf extends Component {

	getBookShelfInfo = () => {
		const info =
			[
				{title: 'Currently Reading', id: 'currentlyReading'},
				{title: 'Want to Read', id: 'wantToRead'},
				{title: 'Read', id: 'read'}
			]

		return info
	}

	render() {
		const { bookShelfBooks, update } = this.props

		return (
			<div>

				{this.getBookShelfInfo().map(shelf => (
					<div key={shelf.id} className="bookshelf">
					  <h2 className="bookshelf-title">{shelf.title}</h2>
					  <div className="bookshelf-books">
					    <ol className="books-grid">

						    { bookShelfBooks.filter( book => book.shelf === shelf.id).map( book =>
							      <li key={book.id}>
							        <div className="book">
							          <div className="book-top">
							            <div className="book-cover" style={ book.imageLinks && ({ backgroundImage: `url("${book.imageLinks.thumbnail}")` }) }></div>
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
						  	}

					    </ol>
					  </div>
					</div>
				))}

			</div>
		)
	}
}

export default Bookshelf

