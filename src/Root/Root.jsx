import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <>
    <div className="relative  font-sans bg-[#0A0A0A] pt-5">
      <NavBar />
      <div className="container min-h-screen mx-auto px-4 my-20 text-3xl text-center text-red-600">
        <Outlet />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Root;
