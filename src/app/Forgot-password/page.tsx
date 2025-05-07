"use client"
import Link from 'next/link'
import React from 'react'
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
      // اینجا می‌تونی به هر رویدادی که می‌خواهی رسیدگی کنی
      // در اینجا فرض می‌کنیم که ایمیل معتبر است و سپس کاربر به صفحه ارسال کد هدایت می‌شود
      console.log(data);
      
      // ارسال ایمیل درست و هدایت به صفحه "Send-code"
      routerBack.push('/Send-code');
    };

  return (
    <div className='flex flex-col items-center justify-center  bg-[#121223] min-h-screen'>
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
            <h1 className="relative top-[-60] text-[30px] text-white">Forgot Password</h1>
            <p className="text-white relative top-[-50] text-[16px]">
            Please sign in to your existing account
            </p>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='w-full relative top-[3] bg-white h-[579] rounded-3xl'
      >
        <label htmlFor="email" className='text-[#32343E] relative top-[24] left-[24]'>EMAIL</label>
        <input 
          type="email"
          placeholder='example@gmail.com'
          id='email'
          className='h-[62px] w-[327px] bg-[#F0F5FA] relative top-[96] left-[-20] rounded-2xl pl-[18]'
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />
        {/* نمایش خطا اگر ایمیل وارد نشده باشد */}
        {errors.email && (
          <div className="text-red-600 text-sm mt-2 ml-6">
            {errors.email?.message}
          </div>
        )}

        <button type="submit" className='relative rounded-2xl bg-[#FF7622] text-white h-[62] w-[327] left-[30] top-[140]'>
          SEND CODE
        </button>
      </form>
    </div>
  )
}
