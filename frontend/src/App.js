import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [reload, setReload] = useState(false);

  // Function to trigger a reload
  const triggerReload = () => {
    setReload(!reload);
  };

  return (
    <div className="container">
      <h1>Bookshelf App</h1>
      <BookForm selectedBook={selectedBook} setSelectedBook={setSelectedBook} triggerReload={triggerReload} />
      <BookList setSelectedBook={setSelectedBook} reload={reload} /> {/* Pass reload state */}
    </div>
  );
}

export default App;

