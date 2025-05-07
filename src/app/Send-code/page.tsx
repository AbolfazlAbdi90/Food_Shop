"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SendCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const routerBack = useRouter();

  const handleBack = () => {
    routerBack.back();
  };

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-[#121223] min-h-screen">
        <Image
              src="/image/Ellipse 1005 (1).png"
              width={177}
              height={177}
              className="relative top-[-0] left-[-100] "
              alt="image top of sign up"
            ></Image>
      <button
        onClick={handleBack}
        className="relative rounded-[100] bg-white h-[45px] w-[45px] top-[-100px] left-[-144]"
      >
        <Image
          src="/image/Back (1).png"
          alt="Back"
          width={10}
          height={5}
          className="relative right-[-16]"
        />
      </button>
      <h1 className="relative top-[-60] text-[30px] text-white">Verification</h1>
      <p className="text-white relative top-[-50] text-[16px]">
        We have sent a code to your email
      </p>
      <p className="text-white relative top-[-40px] text-[16px]">example@gmail.com</p>
      <div className="w-full relative top-[13] bg-white h-[579] rounded-3xl">
        <p className="relative text-[13px] text-[#32343E] top-[24] left-[34]">CODE</p>
        <p className="relative text-[13px] text-[#32343E] top-[8] right-[-234]">
          <strong> Resend</strong>
        </p>
        <p className="relative top-[-14.5] right-[-290]">in 50sec</p>
        <div className="flex gap-4 relative top-[20] left-[54]">
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
      </div>
      <button className="h-[62] bg-[#FF7622] w-[327] text-white rounded-2xl relative top-[-370] ">
        Verify
      </button>
    </div>
  );
}
