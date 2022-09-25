import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import SurahCard from "../components/SurahCard";
import axios from "axios";
function Home() {
  const baseUrl = "http://api.alquran.cloud/v1/surah";
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReversed, setIsReversed] = useState(false);
  useEffect(() => {
    function fetchData(url) {
      axios
        .get(url)
        .then((response) => {
          setIsLoading(false);
          setData(response.data.data);
        })
        .catch((e) => {
          setError(e);
        });
    }
    fetchData(baseUrl);
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  function reverseArr() {
    setData(data.slice().reverse());
    setIsReversed(!isReversed);
  }
  return (
    <div>
      <Banner />
      <div className="border-b max-w-5xl m-auto h-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Surahs</h1>
        <div>
          SORT BY:{" "}
          <button
            className="px-2 py-1 hover:bg-gray-200 rounded-full font-semibold"
            onClick={() => reverseArr()}
          >
            {isReversed ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>
      <div className="py-2 max-h-fit justify-between max-w-5xl m-auto flex flex-wrap gap-2">
        {isLoading
          ? "Loading..."
          : data?.map((item) => {
              return (
                <SurahCard
                  key={item.number}
                  name={item.name}
                  number={item.number}
                  englishName={item.englishName}
                  englishTranslation={item.englishTranslation}
                  numberOfAyahs={item.numberOfAyahs}
                />
              );
            })}
      </div>
    </div>
  );
}
export default Home;