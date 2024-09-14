import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";


const Banner = () => {
    return (
        <section className="bg-gray-100 rounded">
            <div className="p-5 min-h-[600px] flex justify-around items-center">
                <div>
                    <h2 className="text-5xl font-bold">Books to freshen</h2>
                    <h2 className="text-5xl font-bold mt-4">up your bookshelf</h2>
                    
                    <Link to={"/listedBooks"} className="btn bg-green-500 px-5 text-white font-semibold text-lg mt-12 hover:bg-green-600 hover:scale-105">View the List</Link>
                </div>

                <div >
                    <img className="rounded h-[350px]" src={bannerImg} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;