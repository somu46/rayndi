import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <>
    <div className="relative  font-sans bg-[#0F0F0F] pt-5">
      <NavBar />
      <div className=" mt-[3.6rem]">
        <Outlet />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Root;
