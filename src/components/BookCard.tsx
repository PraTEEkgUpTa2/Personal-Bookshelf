import React from 'react';
import './BookCard.css';

interface BookCardProps {
  book: any;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handleAddToBookshelf = () => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    const bookExists = savedBooks.some((savedBook: any) => savedBook.key === book.key);
    if (!bookExists) {
      savedBooks.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(savedBooks));
      alert(`${book.title} has been added to your bookshelf`);
    } else {
      alert(`${book.title} is already in your bookshelf`);
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ') || 'Unknown Author'}</p>
      <button onClick={handleAddToBookshelf}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
