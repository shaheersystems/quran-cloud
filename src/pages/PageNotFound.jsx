import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-[80vh] max-w-6xl m-auto flex items-center justify-center">
      <div className="flex flex-col gap-10 text-center">
        <div className="space-y-5">
          {" "}
          <h1 className="text-5xl font-bold">404 ERROR!!</h1>
          <p className="text-3xl">Sorry, something Went Wrong!!</p>
        </div>{" "}
        <div>
          <Link
            to="/"
            className="flex items-center gap-4 rounded-full justify-center px-2 py-3 font-semibold"
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span>Go back to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
