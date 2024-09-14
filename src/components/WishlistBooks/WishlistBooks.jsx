import React from 'react';
import { getWhislistBooks } from '../../utilities';
import WishlistBook from '../WishlistBook/WishlistBook';

const WishlistBooks = () => {
    const wishlistBooks = getWhislistBooks();
    // console.log(readBooks);


    return (
        <>
            {
                wishlistBooks.map(book => <WishlistBook book={book} key={book.bookId}></WishlistBook>)
            }
        </>
    );
};

export default WishlistBooks;