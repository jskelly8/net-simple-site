import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList({ setSelectedBook }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/books/${id}`)
      .then(() => {
        setBooks(books.filter(book => book.bookId !== id));
      });
  };

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map(book => (
          <li key={book.bookId}>
            {book.title} - {book.author} <br />
            <button onClick={() => setSelectedBook(book)}>Edit</button>
            <button onClick={() => handleDelete(book.bookId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
