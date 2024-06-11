import React, { useEffect, useState } from 'react';
import './BookShelfPage.css';

const BookshelfPage: React.FC = () => {
  const [bookshelf, setBookshelf] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10); 

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    setBookshelf(savedBooks);
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookshelf.slice(indexOfFirstBook, indexOfLastBook);

  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <div className="book-list">
        {currentBooks.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ') || 'Unknown Author'}</p>
          </div>
        ))}
      </div>
      {bookshelf.length > 10 && ( 
        <div className="pagination">
          <button onClick={paginatePrev} disabled={currentPage === 1}>Previous</button>
          <button onClick={paginateNext} disabled={currentBooks.length < booksPerPage}>Next</button>
        </div>
      )}
    </div>
  );
};

export default BookshelfPage;
