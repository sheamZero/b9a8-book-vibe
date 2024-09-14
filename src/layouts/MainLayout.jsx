import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <div className="  ">
                <Navbar></Navbar>
            </div>
            <div className="p-4">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;