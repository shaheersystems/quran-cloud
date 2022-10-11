import React, { useState } from "react";

function TabBar() {
  const [tab, setTab] = useState(0);
  return (
    <div className="h-20 w-full flex items-center justify-center">
      <div className="rounded-full gap-3 w-[420px] h-14 flex items-center justify-between">
        <div className="flex-1 flex rounded-full">
          <button
            onClick={() => setTab(0)}
            className={`px-16 py-3  rounded-full border font-semibold ${
              tab === 0 ? "bg-gray-200" : ""
            }`}
          >
            Reading
          </button>
        </div>
        <div className="flex-1 flex justify-end rounded-full">
          <button
            onClick={() => setTab(1)}
            className={`px-16 py-3 rounded-full border font-semibold ${
              tab === 1 ? "bg-gray-200" : ""
            }`}
          >
            Translation
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
