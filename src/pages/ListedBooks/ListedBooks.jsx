

const ListedBooks = () => {
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

            <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 text-gray-800">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Architecto</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-600 text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Corrupti</span>
                </a>
               
            </div>

        </div>
    );
};

export default ListedBooks;