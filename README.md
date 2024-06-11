# Personal Bookshelf

## Overview

This project is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage. The application includes two main pages: a Book Search Page and a Personal Bookshelf Page. Users can search for books, view search results in real-time, and add their favorite books to a personal bookshelf that persists across sessions.

## Features

### Book Search Page

- Input field for users to type in a book's name.
- Real-time display of search results as the user types.
- Integration with the Open Library API to fetch book data.
- Display search results in a list of cards, each representing a book.
- Button to add books from search results to the personal bookshelf.
- Button to navigate to the Personal Bookshelf Page.

### Personal Bookshelf Page

- Displays the user's personal bookshelf.
- Bookshelf data is stored in localStorage for persistent storage.
- Allows users to view the books they have added to their bookshelf.
- Pagination for displaying books in sets of 10, with navigation buttons.

## Tech Stack

- **React**: For building the user interface.
- **Axios**: For making API requests.
- **Lodash.debounce**: For debouncing the search input.
- **React Router DOM**: For client-side routing.
- **localStorage**: For storing the user's personal bookshelf.
- **CSS**: For styling the application.

## Installation and Setup

### Prerequisites

Ensure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later)

### Steps to Set Up the Project Locally

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/book-search-bookshelf.git

```
2. **Navigate to the project directory:**

```sh
cd book-search-bookshelf
```
3.**Install dependencies:**

```sh
npm install
npm install --save-dev @types/lodash.debounce
```
### Steps to Run the Application on a Local Machine

1. **Start the development server:**

```sh
npm start
```


