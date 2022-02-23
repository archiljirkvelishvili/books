import React from 'react'

import './style/style.css'
export function Booklist(props) {
  const booklist = props.data.map(book => (
    <div className="booklist">
      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="poto" />
      <h1>{book.volumeInfo.title}</h1>
      {book.volumeInfo.authors && <p> author: {book.volumeInfo.authors}</p>}
      <a href="#"> Read more..</a>
    </div>
  ))

  return <div> {booklist} </div>
}
