"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col items-center justify-start bg-[#121223] min-h-screen px-4 pt-10">
      {/* آیکون بالا */}
      <div className="w-full max-w-xs flex justify-start mb-[-40px] relative top-[-30] left-[-34]">
        <Image
          src="/image/Ellipse 1005 (1).png"
          width={177}
          height={177}
          alt="top icon"
        />
      </div>

      {/* دکمه برگشت */}
      <div className="w-full max-w-xs flex justify-start mt-[-90]">
        <button
          onClick={handleBack}
          className="rounded-full bg-white h-[45px] w-[45px] flex items-center justify-center shadow"
        >
          <Image
            src="/image/Back (1).png"
            alt="Back"
            width={10}
            height={5}
          />
        </button>
      </div>

      {/* عنوان و توضیح */}
      <h1 className="text-[30px] text-white mt-6">Verification</h1>
      <p className="text-white text-[16px] mt-2">We have sent a code to your email</p>
      <p className="text-white text-[16px] mb-4">example@gmail.com</p>

      {/* فرم وارد کردن کد */}
      <div className="bg-white mt-6 rounded-3xl w-full max-w-sm p-6 h-[35rem]">
        <div className="flex justify-between items-center text-sm text-[#32343E]">
          <p>CODE</p>
          <div className="flex items-center gap-2">
            <strong>Resend</strong>
            <span className="text-xs">in 50sec</span>
          </div>
        </div>

        <div className="flex justify-between mt-4">
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

      {/* دکمه تایید */}
     <div className="flex justify-center items-center">
  <Link href="/">
    <button className="bg-[#FF7622] text-white rounded-2xl w-[400] max-w-xs h-[62px] text-lg relative top-[-400] w-[]">
      Verify
    </button>
  </Link>
</div>

      
    </div>
  );
}
