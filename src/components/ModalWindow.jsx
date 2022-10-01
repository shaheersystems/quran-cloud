import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import SurahNavigation from "./SurahNavigation";
import { Spinner } from "flowbite-react";
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
    var lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  }
  const filteredData = data.filter((item) => {
    if (input === "") {
      return item;
    } else {
      return item.englishName.toLowerCase().includes(input);
    }
  });
  console.log(data);
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>
        <input
          type="text"
          className="w-96 rounded border-none"
          placeholder="What you want to read"
          onChange={onChange}
        />
      </Modal.Header>
      <Modal.Body className="bg-black">
        <div>
          <h3 className="py-3 font-semibold">Try Navigating to:</h3>
        </div>
        <div className="h-64 overflow-y-scroll">
          {" "}
          {isLoading ? (
            <Spinner aria-label="Default status example" />
          ) : filteredData.length !== 0 ? (
            filteredData?.map((item) => {
              return (
                <SurahNavigation
                  id={item.number}
                  name={item.englishName}
                  onClick={onClose}
                />
              );
            })
          ) : (
            <div className="w-full h-64 flex gap-3 items-center justify-center">
              <span>No Resul were found</span>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ModalWindow;
