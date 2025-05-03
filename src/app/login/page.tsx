"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push("/getLocation");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative top-[100]">
        <label
          htmlFor="Email"
          className="w-[43px] h-[16px] relative top-[-247px]"
        >
          Email
        </label>
        <input
          type="email"
          id="Email"
          placeholder="example@gmail.com"
          className=" p-2 mb-4 w-[327px] rounded h-[62px] bg-[#F0F5FA] relative top-[-180px] left-[-24px] "
        />
      </div>

      <div className="mb-6 relative top-[-40]">
        <label
          htmlFor="password"
          className="relative left-[-17] top-[-20] block text-sm mb-2 text-gray-700"
        >
          Password
        </label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="**********"
            className="w-[327px] h-[62px] p-2 bg-[#F0F5FA] rounded"
          />
          <Image
            className="relative top-[-42] right-[-278]"
            src="/image/Group (1).png" // فقط یک تصویر ثابت
            alt="آیکون نمایش رمز"
            width={24}
            height={24}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
      </div>

      <div className="flex relative top-[90]">
        <input
          type="checkbox"
          className="rounded-2xl relative top-[-130] left-[-112]"
        />
        <p className="relative top-[-130] left-[-100] text-[#7E8A97] text-[13px]">
          Remember me
        </p>
      </div>

      <button className="text-[#FF7622] relative top-[-59px] left-[100px]">
        Forgot Password
      </button>

      <button
        onClick={handleLogin}
        className="bg-[#FF7622] text-white py-2 px-6 rounded-lg h-[62px] w-[327px] relative top-[0px]"
      >
        LOG IN
      </button>
      <h2 className="relative top-[50] left-[-62px]">Don’t have an account?</h2>

      <button className="relative text-[#FF7622] top-[25px] left-[124]">
        Sign Up
      </button>
    </div>
  );
}
