import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import books from "../../../public/data.json";
import { saveBook, saveWhislistBooks } from '../../utilities';

const BookDetails = () => {
    const { id } = useParams();
    const book = books.find(book => book.bookId == id);
    const { image, tags, bookName, rating, author, category, review, totalPages, publisher, yearOfPublishing } = book;

    // console.log(book);

    const handleReadButton = () => {
        // console.log(book);
        saveBook(book);
    }

    const handleWishlistButton = () =>{
        console.log("clicked");
        saveWhislistBooks(book);
    }

    return (
        <section>
            <div className="flex items-center justify-between gap-6">

                <div className="bg-base-200 w-1/2 rounded-lg h-[550px] p-8 flex items-center justify-center">
                    <img className='h-full' src={image} alt="" />
                </div>

                <div className=' w-1/2 p-4'>
                    <div>
                        <h2 className="font-bold text-4xl">{bookName}</h2>
                        <p className="my-5 font-medium text-lg">By : {author}</p>
                        <p className=' font-medium text-lg py-2 border-b border-t'>{category}</p>
                        <p className="my-6 text-base leading-relaxed"><span className="font-bold ">Review</span>: {review}</p>
                        <div className="pb-4 border-b flex items-center gap-10 "><span className="font-bold">Tags : </span>
                            {
                                tags.map((tag, idx) => <p key={idx} className="text-green-500 bg-slate-100 px-4 py-1 rounded">#{tag}</p>)
                            }
                        </div>

                        <div className="flex items-center my-6 gap-16 text-base">
                            <div>
                                <p>Number of Page : </p>
                                <p className='my-3'>Publisher : </p>
                                <p>Year of Publishing : </p>
                                <p className='my-3'>Rating : </p>
                            </div>

                            <div>
                                <p className="font-bold">{totalPages}</p>
                                <p className="font-bold my-3">{publisher}</p>
                                <p className="font-bold">{yearOfPublishing}</p>
                                <p className="font-bold my-3">{rating}</p>
                            </div>
                        </div>

                        <div>
                            <Link onClick={handleReadButton} className="px-8 py-3 font-semibold rounded bg-green-500 text-lg text-white">Read</Link>
                            <Link onClick={handleWishlistButton} className="px-8 py-3 mx-4 font-semibold rounded bg-[#59C6D2] text-lg text-white">Whishlist</Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
export default BookDetails;