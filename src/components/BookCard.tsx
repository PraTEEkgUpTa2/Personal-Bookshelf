import React from 'react';
import './BookCard.css';
import { getUserIdentifier } from '../utils';

interface BookCardProps {
  book: any;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const userId = getUserIdentifier();

  const handleAddToBookshelf = () => {
    const savedBooks = JSON.parse(localStorage.getItem(`${userId}_bookshelf`) || '[]');
    if (!savedBooks.some((savedBook: any) => savedBook.key === book.key)) {
      const updatedBooks = [...savedBooks, book];
      localStorage.setItem(`${userId}_bookshelf`, JSON.stringify(updatedBooks));
      alert('Book saved to your bookshelf!');
    } else {
      alert('This book is already in your bookshelf.');
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
