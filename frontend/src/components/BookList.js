import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList({ setSelectedBook, reload }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  }, [reload]);

  const handleDelete = (id) => {
    axios.delete(`/api/books/${id}`)
      .then(() => {
        setBooks(books.filter(book => book.bookId !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the book!", error);
      });
  };

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map(book => (
          <li key={book.bookId}>
            <div>
              <strong>{book.title}</strong> - {book.author}
            </div>
            <div>
              <button onClick={() => setSelectedBook(book)}>Edit</button>
              <button onClick={() => handleDelete(book.bookId)} style={{ marginLeft: '10px' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
