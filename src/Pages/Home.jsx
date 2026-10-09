import React from 'react';

function Home({ books }) {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1>Welcome to BookSales</h1>
          <p>Discover your next great read from our curated collection.</p>
        </div>
      </div>
      
      <div className="container">
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Featured Books</h2>
        <div className="book-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-year">Published: {book.year}</p>
                <p className="book-desc">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
