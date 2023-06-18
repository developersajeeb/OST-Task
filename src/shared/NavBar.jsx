import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo-OST.png'
import Hamburger from "hamburger-react";


const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='bg-white shadow-md md:py-2'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-1">
                <Link to='/'>
                    <img className='w-32' src={logo} alt="" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center ml-3 text-sm text-gray-700 rounded-lg md:hidden border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                            <li>Job</li>
                        </NavLink>
                        <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                            <li>Event</li>
                        </NavLink>
                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-4 w-44 border text-center border-gray-300 rounded-lg md:hidden bg-white shadow-lg absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'right-2 -top-48'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                        <li>Blog</li>
                    </NavLink>
                    <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                        <li>Job</li>
                    </NavLink>
                    <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#76a89f] font-medium' : 'text-gray-700'}>
                        <li>Event</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;