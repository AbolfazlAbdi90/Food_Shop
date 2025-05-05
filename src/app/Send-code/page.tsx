"use client";

import React, { useState } from "react";

export default function SendCode() {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-4 relative top-[-180]">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-14 h-14 text-center text-xl rounded-md bg-[#F0F5FA] text-black outline-none"
          />
        ))}
      </div>
      <button className="h-[62] bg-[#FF7622] w-[327] text-white rounded-2xl relative top-[-90] ">
      Verify
      </button>
    </div>
  );
}
