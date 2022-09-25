import React from "react";

function SurahCard(props) {
  return (
    <div className="h-20 group transition-all cursor-pointer px-2 hover:border-teal-500 rounded w-80 border flex items-center justify-between">
      <div className="flex items-center">
        <div className="rounded-full bg-gray-100 transition-all group-hover:bg-teal-500 group-hover:text-white h-14 w-14 flex items-center justify-center">
          <h1 className="text-xl font-semibold">{props.number}</h1>
        </div>
        <div className="px-2">
          <h2 className="font-semibold text-xl">{props.englishName}</h2>
          <span>{props.englishNameTranslation}</span>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-semibold text-xl font-arabic">{props.name}</h1>
        <span className="text-sm">{props.numberOfAyahs} Ayahs</span>
      </div>
    </div>
  );
}

export default SurahCard;
