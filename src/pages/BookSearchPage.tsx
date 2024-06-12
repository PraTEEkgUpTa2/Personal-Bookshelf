import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import BookCard from '../components/BookCard';
import './BookSearchPage.css';

const BookSearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBooks = useCallback(async (page: number) => {
    if (!query) return;
    
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json`, {
        params: { q: query, limit: 10, page },
      });
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchBooks(currentPage);
  }, [fetchBooks,currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="search-page">
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book..."
        className="search-input"
      />
      {loading && <p>Loading...</p>}
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
      {query && (<div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>)}
      
    </div>
  );
};

export default BookSearchPage;
