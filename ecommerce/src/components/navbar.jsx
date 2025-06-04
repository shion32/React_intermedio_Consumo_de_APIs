import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';

const NavBar = ({ searchTerm, setSearchTerm }) => {
return (
<nav className="flex flex-wrap items-center justify-between px-4 py-3 bg-white border rounded-full shadow-sm w-full">
    <div className="font-bold text-sm">HOTLINE</div>

    <div className="flex items-center gap-3 mt-2 sm:mt-0 flex-grow sm:flex-grow-0 sm:w-auto">
    <div className="relative w-full sm:w-64">
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-1.5 border rounded-full text-sm focus:outline-none"
        />
    </div>

    <FiShoppingBag className="text-xl cursor-pointer" />
    </div>
</nav>
);
};

export default NavBar;
