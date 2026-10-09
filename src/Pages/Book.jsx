import React, { useState } from 'react';

function Book({ books, onAddBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, year, description, image } = formData;
    
    // Validation
    if (!title || !author || !year || !description || !image) {
      setError('All fields are required!');
      return;
    }
    
    // Add book
    onAddBook({ title, author, year: parseInt(year), description, image });
    
    // Reset form
    setFormData({
      title: '',
      author: '',
      year: '',
      description: '',
      image: ''
    });
    setError('');
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem' }}>
      
      <div className="add-book-section">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              placeholder="Book Title" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input 
              type="text" 
              id="author" 
              name="author" 
              value={formData.author} 
              onChange={handleChange} 
              placeholder="Author Name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year Published</label>
            <input 
              type="number" 
              id="year" 
              name="year" 
              value={formData.year} 
              onChange={handleChange} 
              placeholder="e.g. 2024" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input 
              type="url" 
              id="image" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              placeholder="https://example.com/image.jpg" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              rows="4" 
              placeholder="Brief description of the book"
            ></textarea>
          </div>
          
          {error && <p className="error-msg">{error}</p>}
          
          <button type="submit" className="submit-btn">Add Book</button>
        </form>
      </div>

      <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>Book Catalog</h2>
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
  );
}

export default Book;
