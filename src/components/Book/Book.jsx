import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;

    const bId = parseInt(bookId);
    



    return (
        <Link to={`/bookDetails/${bookId}`} className="card border p-6">
            <figure className="bg-base-200  h-60 w-full rounded-xl">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>

            <div className="mt-6">
                <div className="flex items-center gap-10">
                    {
                        tags.map((tag, idx) => <p key={idx} className="text-green-500 bg-slate-100 px-4 py-1 rounded">{tag}</p>)
                    }
                </div>
                <h2 className="card-title my-4">{bookName}</h2>
                <p className="mb-5">By : {author}</p>

                <div className="card-actions flex justify-between items-center border-t-2 border-dashed pt-4">
                    <span>{category}</span>
                    <div className="flex items-center gap-2">
                        <span>{rating}</span>
                        <FaRegStar></FaRegStar>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;