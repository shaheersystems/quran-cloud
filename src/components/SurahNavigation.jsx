import React from "react";
import { Link } from "react-router-dom";

function SurahNavigation({ name, id, onClick }) {
  return (
    <Link to={`/surah/${id}`} onClick={onClick}>
      <div className="h-16 flex items-center px-3 mb-2 w-full hover:bg-gray-100 transition-all rounded">
        <div className="flex items-center gap-4 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
          <h1>Surah {name}</h1>
        </div>
      </div>
    </Link>
  );
}

export default SurahNavigation;
