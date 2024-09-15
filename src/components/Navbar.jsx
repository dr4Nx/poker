import logo from "../assets/logo.png";
import poker from "../assets/poker.png"
import { navItems } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={poker} alt="" />
                    <span className="text-xl tracking-tight">Poker</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                    ))}
                </ul>
                <div className="hidden lg:flex space-x-12 items-center">
                    <a href="https://www.pokernow.club/"
                    className="bg-gradient-to-r from-red-500 to-red-800 py-2 px-3 rounded-md">Play Now!</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed mt-3 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center text-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-2">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 mt-10">
                        <a href="https://www.pokernow.club/" className="py-2 px-3 rounded-md bg-gradient-to-r from-red-500 to-red-800">Play Now!</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  );

}

export default Navbar;