import React from "react";

function Navbar({ onClick }) {
  return (
    <div className="sticky top-0 bg-white h-16 border flex px-10 items-center justify-between">
      <div>
        <a href="/">
          <h1 className="text-3xl font-bold font-serif">Quran.com</h1>
        </a>
      </div>
      <div className="flex items-center gap-8">
        <button
          onClick={onClick}
          className="hover:bg-gray-100 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <a
          href="https://github.com/shaheersystems/quran-cloud"
          className="px-3 py-1 rounded-full bg-stone-900 text-white"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Navbar;
