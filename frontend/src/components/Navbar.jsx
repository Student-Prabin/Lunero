import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/assets.js"
import { LuChevronLeft, LuHeart, LuMenu, LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="sm:mx-20 flex items-center justify-between py-5 font-medium">
      <NavLink to={'/'}>
        <img src={assets.logo} className="w-30" />
      </NavLink>
      {/* pages navigation*/}
      <ul className="hidden sm:flex gap-5 text-sm">
        <NavLink to={'/'} className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to={'/shop'} className='flex flex-col items-center gap-1'>
          <p>Shop</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
      </ul>

      {/* icons */}
      <div className="flex items-center gap-6">
        {/* user dropdown */}
        <div className="group relative ">
          <LuUser size={20} className="cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 text-xs">
            <div className="flex flex-col gap-2 w-30 py-3 px-5 bg-slate-100">
              <Link to={'/myAccount'} className="relative">
                <p className="cursor-pointer hover:text-gray-700">My Account</p>
              </Link>
              <p className="cursor-pointer hover:text-gray-700">Orders</p>
              <p className="cursor-pointer hover:text-gray-700">Log Out</p>
            </div>
          </div>

        </div>
        <LuSearch className="cursor-pointer" />
        <LuHeart className="cursor-pointer" />
        <LuShoppingCart className="cursor-pointer" />
        <LuMenu onClick={() => setVisible(true)} className="cursor-pointer sm:hidden" />

        {/* sidebar menu for mobiles */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-600 transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col gap-5 text-white">
            <div onClick={() => setVisible(false)} className="flex items-center p-5 cursor-pointer">
              <LuChevronLeft />Back
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to={'/'}>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to={'/shop'}>Shop</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to={'/about'}>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to={'/contact'}>Contact</NavLink>

          </div>

        </div >

      </div >

    </div >
  )
}
export default Navbar