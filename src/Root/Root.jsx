import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <>
    <div className="relative  font-sans bg-gradient-to-br from-gray-900 to-blue-900 pt-5">
      <NavBar />
      <div className=" mt-[3.5rem]">
        <Outlet />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Root;
