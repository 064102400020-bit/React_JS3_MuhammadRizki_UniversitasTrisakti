import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { initialBooks } from './Utils/books';
import Home from './Pages/Home';
import Book from './Pages/Book';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">BookSales</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/book" className="nav-link">Books</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/book" element={<Book books={books} onAddBook={handleAddBook} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
