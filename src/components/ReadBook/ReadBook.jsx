import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";



const ReadBook = ({ book }) => {
    const { image, tags, rating, author, category, bookId, totalPages, publisher, yearOfPublishing } = book;
    console.log(bookId);


    return (
        <div className="border-2 rounded-lg my-6">
            <div className="flex gap-10 p-6 items-center">
                <div className='bg-slate-100 p-10 rounded-lg'>
                    <img src={image}
                        className="max-w-md rounded-lg w-36 h-48 shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{book.bookName}</h1>
                    <p className="my-4 font-medium text-lg">By : {author}</p>

                    {/* tagssss */}
                    <div className="pb-4 flex items-center gap-8 ">
                        <span className="font-bold">Tags : </span>
                        {
                            tags.map((tag, idx) => <p key={idx} className="text-green-500 bg-slate-100 px-4 py-1 rounded-2xl">#{tag}</p>)
                        }
                        <p className='flex items-center gap-2 ml-10'>
                            <FaLocationDot></FaLocationDot>
                            Year of publishing : {yearOfPublishing}
                        </p>
                    </div>

                    <div className="my-3 flex items-center gap-6">
                        <p className='flex items-center gap-2'>
                            <IoPerson></IoPerson>
                            Publisher : {publisher}
                        </p>
                        <p className='flex items-center gap-2'>
                            <MdOutlineContactPage></MdOutlineContactPage>

                            Pages : {totalPages}
                        </p>
                    </div>

                    <div className="">
                        <Link className="text-[#328EFF] bg-[#328EFF26] px-4 py-2 text-sm rounded-2xl" >Category: {category}</Link>
                        <Link className="bg-[#FFAC3326] text-[#FFAC33] px-4 py-2 mx-10 text-sm rounded-2xl">Rating: {rating}</Link>
                        <Link to={`/bookDetails/${bookId}`} className="bg-green-500 text-slate-100 px-4 py-2 text-sm rounded-2xl">View Details</Link>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ReadBook;