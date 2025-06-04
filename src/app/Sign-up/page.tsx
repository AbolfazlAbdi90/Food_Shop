// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";

// export default function SignUp() {
//   const routerBack = useRouter();
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const handleBack = () => {
//     routerBack.back();
//   };

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <div className="bg-[#121223] min-h-screen flex flex-col items-center px-4 py-6">
//       {/* تصویر بالا */}
//       <div className="w-full max-w-xs flex justify-start ml-[-60]">
//         <Image
//           src="/image/Ellipse 1005 (1).png"
//           width={177}
//           height={177}
//           alt="image top"
//         />
//       </div>

//       {/* دکمه بازگشت */}
//       <div className="w-full max-w-xs flex justify-start mt-[-90px]">
//         <button
//           onClick={handleBack}
//           className="bg-white w-[45px] h-[45px] rounded-full flex items-center justify-center shadow"
//         >
//           <Image
//             src="/image/Back (1).png"
//             alt="Back"
//             width={10}
//             height={5}
//           />
//         </button>
//       </div>

//       {/* عنوان و توضیح */}
//       <h1 className="text-white text-[30px] mt-6">Sign Up</h1>
//       <p className="text-white text-[16px] mb-4">Please sign up to get started</p>

//       {/* فرم ثبت‌نام */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white mt-6 rounded-3xl w-full max-w-sm p-6 h-[35rem]"
//       >
//         {/* نام */}
//         <div>
//           <label htmlFor="name" className="text-sm text-[#32343E]">NAME</label>
//           <input
//             id="name"
//             type="text"
//             placeholder="john doe"
//             className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name?.message === "string" && (
//             <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
//           )}
//         </div>

//         {/* ایمیل */}
//         <div>
//           <label htmlFor="email" className="text-sm text-[#32343E]">EMAIL</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="example@gmail.com"
//             className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+\.\S+$/,
//                 message: "Invalid email address",
//               },
//             })}
//           />
//           {errors.email?.message === "string" && (
//             <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         {/* رمز عبور */}
//         <div>
//           <label htmlFor="password" className="text-sm text-[#32343E]">PASSWORD</label>
//           <div className="relative">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="**********"
//               className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
//               {...register("password", { required: "Password is required" })}
//             />
//             <Image
//               src={
//                 showPassword ?
//                 "/image/Group (1).png"
//               : "/image/eye-off-icon.png"
//               }
//               alt={showPassword ? "Hide password" : "Show password"}
//               width={24}
//               height={24}
//               className="absolute top-4 right-4 cursor-pointer"
//               onClick={() => setShowPassword((prev) => !prev)}
//             />
//           </div>
//           {errors.password?.message === "string" && (
//             <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
//           )}
//         </div>

//         {/* تکرار رمز عبور */}
//         <div>
//           <label htmlFor="retype-password" className="text-sm text-[#32343E]">RE-TYPE PASSWORD</label>
//           <div className="relative">
//             <input
//               id="retype-password"
//               type={showPassword ? "text" : "password"}
//               placeholder="**********"
//               className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
//               {...register("retypePassword", {
//                 required: "Re-type Password is required",
//                 validate: (value) =>
//                   value === watch("password") || "Passwords do not match",
//               })}
//             />
//             <Image
//               src={
//                 showPassword ?
//                 "/image/Group (1).png"
//               : "/image/eye-off-icon.png"
//               }
//               alt={showPassword ? "Hide password" : "Show password"}
//               width={24}
//               height={24}
//               className="absolute top-4 right-4 cursor-pointer"
//               onClick={() => setShowPassword((prev) => !prev)}
//             />
//           </div>
//           {errors.retypePassword?.message === "string" && (
//             <p className="text-red-600 text-sm mt-1">
//               {errors.retypePassword.message}
//             </p>
//           )}
//         </div>

//         {/* دکمه ثبت‌نام */}
//         <button
//           type="submit"
//           className="w-full h-[52px] bg-[#FF7622] text-white rounded-2xl mt-4"
//         >
//           SIGN UP
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    // 1. ذخیره توکن تستی در localStorage
    localStorage.setItem("token", "dummy-token");

    // 2. هدایت به صفحه اصلی
    router.push("/");
  };

  return (
    <div className="bg-[#121223] min-h-screen flex flex-col items-center px-4 py-6 overflow-x-hidden">
      {/* تصویر بالا */}
      <div className="w-full max-w-xs flex justify-start">
        <Image
          src="/image/Ellipse 1005 (1).png"
          width={177}
          height={177}
          alt="image top"
        />
      </div>

      {/* دکمه بازگشت */}
      <div className="w-full max-w-xs flex justify-start mt-[-90px]">
        <button
          onClick={() => router.back()}
          className="bg-white w-[45px] h-[45px] rounded-full flex items-center justify-center shadow"
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
      <h1 className="text-white text-[30px] mt-6">Sign Up</h1>
      <p className="text-white text-[16px] mb-4">Please sign up to get started</p>

      {/* فرم ثبت‌نام */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white mt-6 rounded-3xl w-full max-w-sm p-6 h-[35rem]"
      >
        {/* نام */}
        <div>
          <label htmlFor="name" className="text-sm text-[#32343E]">NAME</label>
          <input
            id="name"
            type="text"
            placeholder="john doe"
            className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name?. message === "string" && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* ایمیل */}
        <div>
          <label htmlFor="email" className="text-sm text-[#32343E]">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email?. message === "string" && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* رمز عبور */}
        <div>
          <label htmlFor="password" className="text-sm text-[#32343E]">PASSWORD</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
              {...register("password", { required: "Password is required" })}
            />
            <Image
              src={showPassword ? "/image/Group (1).png" : "/image/eye-off-icon.png"}
              alt="Toggle password"
              width={24}
              height={24}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setShowPassword(prev => !prev)}
            />
          </div>
          {errors.password?. message === "string" && (
            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* تکرار رمز عبور */}
        <div>
          <label htmlFor="retype-password" className="text-sm text-[#32343E]">RE-TYPE PASSWORD</label>
          <div className="relative">
            <input
              id="retype-password"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              className="w-full h-[52px] mt-1 rounded-2xl bg-[#F0F5FA] px-4 outline-none"
              {...register("retypePassword", {
                required: "Re-type Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            <Image
              src={showPassword ? "/image/Group (1).png" : "/image/eye-off-icon.png"}
              alt="Toggle password"
              width={24}
              height={24}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setShowPassword(prev => !prev)}
            />
          </div>
          {errors.retypePassword?. message === "string" && (
            <p className="text-red-600 text-sm mt-1">{errors.retypePassword.message}</p>
          )}
        </div>

        {/* دکمه ثبت‌نام */}
        <button
          type="submit"
          className="w-full h-[52px] bg-[#FF7622] text-white rounded-2xl mt-4"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}
