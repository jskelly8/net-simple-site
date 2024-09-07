import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <h1>Bookshelf App</h1>
      <BookForm selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
      <BookList setSelectedBook={setSelectedBook} />
    </div>
  );
}

export default App;

