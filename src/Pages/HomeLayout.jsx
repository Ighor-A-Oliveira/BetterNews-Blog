import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Logo from "../Components/Logo";
import Footer from "../Components/Footer";


export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-neutral-500 relative w-full">
        <Logo />
        <Navbar/>
        <div className="w-full lg:w-[80%] flex justify-center bg-white mx-auto min-h-screen pt-8">
          <Outlet/>
        </div>
        <div className="w-full flex justify-center bg-black mx-auto pt-8">
          <Footer/>
        </div>
    </div>
  )
}
