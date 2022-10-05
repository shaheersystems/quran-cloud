import React from "react";
import { PropTypes } from "prop-types";
function SingleAyah(props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="p-2 border border-black rounded-full"></div>
      <h1 className="flex items-center text-center leading-loose px-3 py-4 font-arabic text-5xl">
        {props.text}
      </h1>
    </div>
  );
}

SingleAyah.propTypes = {
  text: PropTypes.string,
};

export default SingleAyah;
