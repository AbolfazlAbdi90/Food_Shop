"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface IFormInput {
  email: string;
}

export default function ForgotPassword() {
  const routerBack = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleBack = () => {
    routerBack.back();
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    routerBack.push('/Send-code');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121223] px-4">
      {/* آیکون بالا */}
      <div className="relative w-full max-w-xs flex justify-start ml-[-80]">
        <Image
          src="/image/Ellipse 1005 (1).png"
          width={177}
          height={177}
          alt="top icon"
        />
      </div>

      {/* دکمه برگشت */}
      <div className="relative w-full max-w-xs flex justify-start -mt-20">
        <button
          onClick={handleBack}
          className="rounded-full bg-white h-[45px] w-[45px] flex items-center justify-center shadow relative top-[-20]"
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
      <h1 className="text-[30px] text-white mt-6">Forgot Password</h1>
      <p className="text-white text-[16px] mt-2 mb-6 text-center">
        Please sign in to your existing account
      </p>

      {/* فرم */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white mt-6 rounded-3xl w-full max-w-sm p-6 h-[35rem]"
      >
        <div>
          <label htmlFor="email" className="text-[#32343E] block mb-2">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="h-[62px] w-full bg-[#F0F5FA] rounded-2xl px-4"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#FF7622] mt-[30] text-white rounded-2xl w-full h-[62px] text-lg"
        >
          SEND CODE
        </button>
      </form>
    </div>
  );
}
