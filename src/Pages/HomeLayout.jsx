import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Logo from "../Components/Logo";


export default function HomeLayout() {
  return (
    <div className="h-full bg-neutral-500 relative w-full">
        <Logo/>
        <Navbar/>
        <div className="w-full lg:w-[80%] flex justify-center bg-white mx-auto h-full">
          <Outlet/>
        </div>
    </div>
  )
}
