import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="p-4 mb-2 text-gray-800">
            <div className="container h-16 flex justify-between mx-auto">
                <Link to={"/"} rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2 font-bold text-3xl">
                    Book Vibe
                </Link>

                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to={"/"} className={({ isActive }) => `flex items-center px-4 py-1 -mb-1 font-semibold text-lg ${isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] rounded-lg" : ""}`}>Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to={"/listedBooks"} className={({ isActive }) => `flex items-center px-4 py-1 -mb-1 font-semibold text-lg ${isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] rounded-lg" : ""}`}>ListedBooks</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to={"/pageToRead"} className={({ isActive }) => `flex items-center px-4 py-1 -mb-1 font-semibold text-lg ${isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] rounded-lg" : ""}`}>Page to Read</NavLink>
                    </li>

                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-2 rounded bg-green-500 text-white text-lg font-semibold">Sign in</button>
                    <button className="self-center px-8 py-2 ml-3 font-semibold rounded bg-[#59C6D2] text-lg text-white">Sign up</button>
                </div>

                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;