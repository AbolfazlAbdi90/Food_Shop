"use client";

import { useState } from "react";

export default function GetLocation() {
  const [status, setStatus] = useState<string>("");
  const [mapLink, setMapLink] = useState<string>("");

  const geoFindMe = () => {
    setStatus("");
    setMapLink("");

    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
      return;
    }

    setStatus("Locating…");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setStatus("");
        setMapLink(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
      },
      () => {
        setStatus("Unable to retrieve your location");
      }
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="w-[206px] h-[250px] relative top-[100px] bg-[#98A8B8] rounded-[90px]">

      </div>

      <button
        onClick={geoFindMe}
        className="bg-[#FF7622] text-white px-6 py-2 rounded-md w-[327px] h-[62px] relative top-[219px]"
      >
      ACCESS LOCATION
      </button>

      <p className="text-gray-700">{status}</p>

      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View on map
        </a>
      )}
      <p className="text-[#646982] relative top-[200]">DFOOD WILL ACCESS YOUR LOCATION <br></br>ONLY  WHILE USING THE APP</p>
    </div>
  );
}

