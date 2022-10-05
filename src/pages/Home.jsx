import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import SurahCard from "../components/SurahCard";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { PropTypes } from "prop-types";
function Home({ setIsOpen }) {
  const baseUrl = "https://api.alquran.cloud/v1/surah";
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
      <Banner setIsOpen={setIsOpen} />
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
        {isLoading ? (
          <div className="h-56 flex items-center justify-center w-full">
            <Spinner aria-label="Loading all Surahs..." />
          </div>
        ) : (
          data?.map((item) => {
            return (
              <SurahCard
                key={item.number}
                name={item.name}
                number={item.number}
                englishName={item.englishName}
                englishNameTranslation={item.englishNameTranslation}
                numberOfAyahs={item.numberOfAyahs}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

Home.propType = {
  setIsOpen: PropTypes.func,
};

export default Home;
