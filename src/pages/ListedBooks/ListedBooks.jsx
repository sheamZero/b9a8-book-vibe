import { Link, Outlet } from "react-router-dom";
import { useState } from "react";


const ListedBooks = () => {

    const [tabs, setTabs] = useState(0);



    return (
        <div>
            <h2 className="text-center p-6 bg-base-200 font-bold text-4xl">Books</h2>
            <div className="flex items-center justify-center my-10">
                <select className="py-5 outline-none px-8 rounded-2xl bg-green-500 text-2xl text-white" id="">
                    <option value="sort by">sort by</option>
                    <option value="name">name</option>
                    <option value="age">age</option>
                </select>
            </div>

            <div className="flex items-start -mx-4 overflow-x-auto mb-8 overflow-y-hidden sm:justify-start flex-nowrap text-gray-800">
                <Link to={""} onClick={() => setTabs(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-gray-600 text-gray-600 ${tabs == 0 ? "border-b-0 rounded-t-lg" : "border-t-0 rounded"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link to={"wishlist"} onClick={() => setTabs(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 border border-gray-700 ${tabs == 1 ? "border-b-0 rounded-t-lg" : "border-t-0 rounded"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default ListedBooks;