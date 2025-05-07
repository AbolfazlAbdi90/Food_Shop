"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, FieldValues, FieldError } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    router.back();
  };

  const onSubmit = (data: FieldValues) => {
    // برای تست ساده، فرض بر این است که رمز عبور باید برابر با "yourEmailPassword" باشد
    if (data.password !== "yourEmailPassword") {
      alert("Incorrect password");
      return;
    }
    router.push("/getLocation");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121223] min-h-screen">
      <Image
        src="/image/Ellipse 1005 (1).png"
        width={177}
        height={177}
        className="relative top-[-0] left-[-100] "
        alt="image top of sign up"
      />
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
      <h1 className="relative top-[-60] text-[30px] text-white">Log In</h1>
      <p className="text-white relative top-[-50] text-[16px]">
        Please sign in to your existing account
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-[579] rounded-3xl w-full relative top-[13px]"
      >
        <div className="relative top-[100]">
          <label
            htmlFor="Email"
            className="w-[43px] h-[16px] relative left-[24px] top-[-94px]"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            placeholder="example@gmail.com"
            className="z-10 p-2 mb-1 w-[327px] pl-[19] rounded-2xl h-[62px] bg-[#F0F5FA] relative top-[-37px] left-[-15px] "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm relative left-[24px] top-[-25px]">
              {errors.email?.message as React.ReactNode}
            </p>
          )}
        </div>

        <div className="mb-6 relative top-[-40]">
          <label
            htmlFor="password"
            className="relative left-[24] top-[134] block text-sm mb-2 text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="**********"
              className="w-[327px] relative z-0 top-[148] left-[24] pl-[19] pt-[15] h-[62px] p-2 bg-[#F0F5FA] rounded-2xl"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <Image
              className="absolute z-10 top-[174px] right-[60px] cursor-pointer"
              src="/image/Group (1).png"
              alt="آیکون نمایش رمز"
              width={24}
              height={24}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm relative left-[24px] top-[155px]">
              {errors.password?.message as React.ReactNode}
            </p>
          )}
        </div>

        <div className="flex relative top-[90]">
          <input
            type="checkbox"
            className="rounded-2xl relative top-[20] left-[24]"
          />
          <p className="relative top-[20] left-[34] text-[#7E8A97] text-[13px]">
            Remember me
          </p>
        </div>

        <Link
          href="/Forgot-password"
          className="relative top-[90px] left-[220px] text-[#FF7622]"
        >
          Forgot Password
        </Link>

        <button
          type="submit"
          className="bg-[#FF7622] text-white py-2 px-6 rounded-2xl h-[62px] w-[327px] relative left-[24] top-[123px]"
        >
          LOG IN
        </button>
        <h2 className="relative top-[170px] left-[62px]">
          Don’t have an account?
        </h2>
        <Link href="/Sign-up">
          <button className="relative text-[#FF7622] top-[146px] left-[251]">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
}

