import React from "react";

function Footer() {
  return (
    <div className="h-20 relative bottom-0 py-4 max-w-5xl flex items-center justify-between m-auto">
      <div className="text-xl">
        Made with <span className="text-red-600 text-xl">♥</span> by{" "}
        <a href="https://twitter.com/shaheerdevr" className="font-semibold">
          @shaheerdevr
        </a>
      </div>
      <div className="space-x-4">
        <a
          className="font-poppins"
          href="https://www.linkedin.com/in/muhammad-shaheer-a28994242/"
        >
          LinkedIn
        </a>
        <a className="font-poppins" href="https://github.com/shaheersystems">
          Github
        </a>
        <a className="font-poppins" href="https://twitter.com/shaheerdevr">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Footer;
