import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleAyah from "../components/SingleAyah";
import { Link } from "react-router-dom";
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
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl m-auto max-h-fit py-10">
      <h1 className="text-4xl font-arabic">{data.name}</h1>
      <div className="max-w-full max-h-fit py-10 gap-10 items-center flex flex-wrap flex-row-reverse justify-center border-b">
        {loading
          ? "Loading....."
          : data.ayahs?.map((item) => {
              return <SingleAyah key={item.number} text={item.text} />;
            })}
      </div>
      <div className="h-16 flex items-center gap-2 max-w-5xl m-auto">
        <Link
          className="flex items-center gap-1 px-3 py-2 border rounded hover:border-teal-500"
          to={`/surah/${id - 1}`}
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
          className="flex items-center gap-1 px-3 py-2 border rounded hover:border-teal-500"
          to={`/surah/${Number(id) + 1}`}
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
