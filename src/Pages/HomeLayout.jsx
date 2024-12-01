import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Logo from "../Components/Logo";


export default function HomeLayout() {
  return (
    <div className="h-[2000px] bg-neutral-500 relative w-full">
        <Logo/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
