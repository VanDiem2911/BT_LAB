import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b-2 border-pink-300">
      <div className="flex items-center space-x-2">
        <img src="/images/Group 12.png" alt="Logo" className="w-30 h-30" />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full py-2 px-4 pl-10 bg-gray-100 focus:outline-none"
        />
        <span className="absolute left-3 top-2.5 text-gray-500">
          <img src="" alt="" />
        </span>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-600">
        <a href="#" className="hover:text-pink-500">What to cook</a>
        <a href="#" className="hover:text-pink-500">Recipes</a>
        <a href="#" className="hover:text-pink-500">Ingredients</a>
        <a href="#" className="hover:text-pink-500">Occasions</a>
        <a href="#" className="hover:text-pink-500">About Us</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-pink-100 text-pink">
        <span>Your Recipe Box</span>
        </button>
        
        <img src="/user-avatar.png" alt="User" className="w-10 h-10 rounded-full" />
      </div>
    </nav>
  );
}



