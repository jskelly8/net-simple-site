import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookForm({ selectedBook, setSelectedBook }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedDate: '',
    genre: ''
  });

  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      setBook({
        title: '',
        author: '',
        isbn: '',
        publishedDate: '',
        genre: ''
      });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBook) {
      axios.put(`/api/books/${selectedBook.bookId}`, book)
        .then(() => {
          setSelectedBook(null);
        });
    } else {
      axios.post('/api/books', book)
        .then(() => {
          setBook({
            title: '',
            author: '',
            isbn: '',
            publishedDate: '',
            genre: ''
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={book.isbn}
        onChange={handleChange}
      />
      <input
        type="date"
        name="publishedDate"
        value={book.publishedDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
      />
      <button type="submit">
        {selectedBook ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
}

export default BookForm;
