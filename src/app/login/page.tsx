"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    router.back();
  };

 const onSubmit = (data: FieldValues) => {
 
  localStorage.setItem("token", "sample-token");
  router.push("/getLocation");
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121223] px-4">
      <div className="relative w-full max-w-sm">
        <Image
          src="/image/Ellipse 1005 (1).png"
          width={177}
          height={177}
          className="absolute top-[-5] left-[-10]"
          alt="image top of sign up"
        />

        <button
          onClick={handleBack}
          className="absolute top-4 left-4 rounded-full bg-white h-11 w-11 mt-[40] flex items-center justify-center"
        >
          <Image src="/image/Back (1).png" alt="Back" width={10} height={5} />
        </button>
      </div>

      <h1 className="mt-32 text-3xl text-white">Log In</h1>
      <p className="text-white mt-2 text-base text-center">
        Please sign in to your existing account
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white mt-6 rounded-3xl w-full max-w-sm p-6 h-[35rem]"
      >
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="Email"
            placeholder="example@gmail.com"
            className="w-full p-4 bg-[#F0F5FA] rounded-2xl"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {errors.email?.message as React.ReactNode}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="**********"
              className="w-full p-4 bg-[#F0F5FA] rounded-2xl"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <Image
              className="absolute top-4 right-4 cursor-pointer"
              src={
                showPassword
                  ? "/image/Group (1).png"
                  : "/image/eye-off-icon.png"
              }
              alt={showPassword ? "Hide password" : "Show password"}
              width={24}
              height={24}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password?.message as React.ReactNode}
            </p>
          )}
        </div>

        {/* نمایش ارور لاگین (مثلا پسورد اشتباه) */}
        {loginError && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {loginError}
          </p>
        )}

        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <p className="text-sm text-[#7E8A97]">Remember me</p>
        </div>

        <div className="flex justify-end mt-[-35px]">
          <Link href="/Forgot-password" className="text-[#FF7622] text-sm">
            Forgot Password
          </Link>
        </div>

        <button
          type="submit"
          className="bg-[#FF7622] h-[62px] text-white w-full py-3 rounded-2xl mb-4 mt-[50px]"
        >
          LOG IN
        </button>

        <div className="text-center">
          <p className="text-sm ml-[-92px]">Don’t have an account?</p>
          <Link
            href="/Sign-up"
            className="text-[#FF7622] text-sm relative top-[-22] ml-[140px]"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
