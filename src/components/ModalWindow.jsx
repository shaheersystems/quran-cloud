import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import SurahNavigation from "./SurahNavigation";
import { Spinner } from "flowbite-react";
import { PropTypes } from "prop-types";
function ModalWindow({ isOpen, setIsOpen }) {
  function onClose() {
    setIsOpen(false);
  }
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    function fetchResult() {
      axios.get("https://api.alquran.cloud/v1/surah").then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      });
    }
    fetchResult();
  }, []);
  function onChange(event) {
    setInput(event.target.value);
  }
  const filteredData = data.filter((item) => {
    if (input.toLowerCase() === "") {
      return item;
    } else {
      return item.englishName.toLowerCase().includes(input.toLowerCase());
    }
  });
  console.log(data);
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>
        <div className="flex items-center gap-2 relative">
          <div className="absolute left-3" htmlFor="search">
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
          </div>
          <input
            id="search"
            type="text"
            className="w-96 px-10 rounded-full outline-none border-none"
            placeholder="What you want to read"
            onChange={onChange}
          />
        </div>
      </Modal.Header>
      <Modal.Body className="bg-black">
        <div>
          <h3 className="py-3 font-semibold">Try Navigating to:</h3>
        </div>
        <div className="h-64 overflow-y-scroll">
          {isLoading ? (
            <Spinner aria-label="Default status example" />
          ) : filteredData.length !== 0 ? (
            filteredData?.map((item) => {
              return (
                <SurahNavigation
                  key={item.number}
                  id={item.number}
                  name={item.englishName}
                  onClick={onClose}
                />
              );
            })
          ) : (
            <div className="w-full h-64 flex gap-3 items-center justify-center">
              <span>
                No Results were found for{" "}
                <span className="font-bold">"{input}"</span>
              </span>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

ModalWindow.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default ModalWindow;
