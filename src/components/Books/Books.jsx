import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    
    // console.log(books);

    return (
        <section>
            <h2 className="text-5xl font-bold text-center my-10 mt-16">Books</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>

        </section>
    );
};

export default Books;