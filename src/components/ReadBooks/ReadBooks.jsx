import React from 'react';
import { getBooks } from '../../utilities';
import ReadBook from '../ReadBook/ReadBook';

const ReadBooks = () => {
    const readBooks = getBooks();
    // console.log(readBooks);


    return (
        <>
            {
                readBooks.map(book => <ReadBook book={book} key={book.bookId}></ReadBook>)
            }
        </>
    );
};

export default ReadBooks;