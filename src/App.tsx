import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookShelfPage';
import './styles/App.css';
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  Component={BookSearchPage} />
          <Route path="/bookshelf" Component={BookshelfPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
