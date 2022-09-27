import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleAyah from "../components/SingleAyah";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import axios from "axios";
function Surah() {
  const baseUrl = "https://api.alquran.cloud/v1/surah";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    function fetchData(url) {
      axios.get(url + `/${id}`).then((response) => {
        setLoading(false);
        setData(response.data.data);
      });
    }
    fetchData(baseUrl);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);
  function copyUrl() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl m-auto max-h-fit py-10">
      <div className="h-16 w-full flex justify-end items-center gap-4 px-5">
        <Tooltip content="Copy Url">
          <button
            onClick={copyUrl}
            className="p-2 rounded-full hover:bg-gray-100"
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
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </button>
        </Tooltip>
        <Tooltip content="font setting">
          <button className="p-2 rounded-full hover:bg-gray-100">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </Tooltip>
      </div>
      <h1 className="text-4xl font-arabic py-5">{data.name}</h1>
      <div className="max-w-full max-h-fit py-10 gap-10 items-center flex flex-wrap flex-row-reverse justify-center border-b">
        {loading
          ? "Loading....."
          : data.ayahs?.map((item) => {
              return <SingleAyah key={item.number} text={item.text} />;
            })}
      </div>
      <div className="h-16 flex items-center gap-2 max-w-5xl m-auto">
        <Link
          className={`flex items-center gap-1 px-3 py-2 border rounded ${
            id === "1"
              ? "cursor-not-allowed text-gray-400"
              : "hover:border-teal-500"
          }`}
          to={`/surah/${id !== "1" ? id - 1 : id}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Previous Surah
        </Link>
        <button
          className="px-3 py-2 border rounded hover:border-teal-500"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Begining of Surah
        </button>
        <Link
          className={`flex items-center gap-1 px-3 py-2 border rounded  ${
            id === "114"
              ? "cursor-not-allowed text-gray-400"
              : "hover:border-teal-500"
          }`}
          to={`/surah/${id !== "114" ? Number(id) + 1 : id}`}
        >
          Next Surah
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Surah;
