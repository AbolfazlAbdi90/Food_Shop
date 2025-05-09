"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


export default function SignUp() {
  const routerBack = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleBack = () => {
    routerBack.back();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-[#121223] min-h-screen">
      <Image
        src="/image/Ellipse 1005 (1).png"
        width={177}
        height={177}
        className="relative"
        alt="image top of sign up"
      />
      <button
        onClick={handleBack}
        className="relative rounded-[100] bg-white h-[45px] w-[45px] top-[-90px] left-[24]"
      >
        <Image
          src="/image/Back (1).png"
          alt="Back"
          width={10}
          height={5}
          className="relative right-[-16]"
        />
      </button>
      <h1 className="text-white relative top-[-40] left-[131] text-[30px]">
        Sign Up
      </h1>
      <p className="text-white relative top[-50px] left-[78.5] text-[16px]">
        Please sign up to get started
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-[579px] relative top-[49px] rounded-3xl bg-white"
      >
        {/* NAME */}
        <label
          htmlFor="Name"
          className="text-[13px] text-[#32343E] relative top-[44] left-[24]"
        >
          NAME
        </label>
        <input
          type="text"
          id="Name"
          placeholder="john doe"
          className="h-[62px] w-[327px] bg-[#F0F5FA] relative top-[115] left-[-16] rounded-2xl pl-[20]"
          {...register("name", { required: "Name is required" })}
        />
        {typeof errors.name?.message === "string" && (
  <p className="...">{errors.name.message}</p>
     )  }

        {/* EMAIL */}
        <label
          htmlFor="EMAIL"
          className="text-[13px] text-[#32343E] relative top-[134] left-[24]"
        >
          EMAIL
        </label>
        <input
          type="email"
          id="EMAIL"
          placeholder="example@gmail.com"
          className="h-[62px] w-[327px] bg-[#F0F5FA] relative top-[209] left-[-16] rounded-2xl pl-[20]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />
        { typeof errors.email?.message === "string" && (
          <p className="text-red-600 text-sm relative top-[215px] left-[24px]">
            {errors.email.message}
          </p>
        )}

        {/* PASSWORD */}
        <label
          htmlFor="password"
          className="text-[13px] text-[#32343E] relative top-[244] left-[24]"
        >
          PASSWORD
        </label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="**********"
            className="relative left-[24] rounded-2xl pl-[20] top-[268] w-[327px] h-[62px] p-2 bg-[#F0F5FA]"
            {...register("password", { required: "Password is required" })}
          />
          <Image
            className="relative top-[230] right-[-278]"
            src="/image/Group (1).png"
            alt="show password"
            width={24}
            height={24}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        { typeof errors.password?.message ==="number" && (
          <p className="text-red-600 text-sm relative top-[270px] left-[24px]">
            {errors.password.message}
          </p>
        )}

        {/* RE-TYPE PASSWORD */}
        <label
          htmlFor="retype-password"
          className="text-[13px] text-[#32343E] relative top-[284] left-[24]"
        >
          Re-Type Password
        </label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            id="retype-password"
            placeholder="**********"
            className="relative left-[24] rounded-2xl pl-[20] top-[310] w-[327px] h-[62px] p-2 bg-[#F0F5FA]"
            {...register("retypePassword", {
              required: "Re-type Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <Image
            className="relative top-[272] right-[-278]"
            src="/image/Group (1).png"
            alt="show password"
            width={24}
            height={24}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        { typeof errors.retypePassword?.message === "number" && (
          <p className="text-red-600 text-sm relative top-[315px] left-[24px]">
            {errors.retypePassword.message}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-[#FF7622] h-[62px] w-[327px] relative rounded-2xl text-white top-[360px] left-[24px]"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}
