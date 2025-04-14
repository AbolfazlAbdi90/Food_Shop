"use client";

import { useState } from "react";
import StepOne from "../Step/step1";
import StepTwo from "../Step/step2";
import StepThree from "../Step/step3";
import StepFour from "../Step/step4";

export default function Onboarding() {
   const [step, setStep] = useState(0);

  const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleSkip = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    window.location.href = "/login"; // انتقال به لاگین
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      {/* برو اون مرحله‌ای رو نشون بده که شماره‌ش برابر با مقدار step هست */}
      {steps[step]}

      {/* دایره‌های راهنما */}
      <div
        className={`flex gap-2 mt-6 relative ${
          step === steps.length - 1 ? "top-[-130px]" : "top-[-92px]"
        }`}
      >
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all relative top-[214] ${
              index === step ? "bg-[#FF7622] w-4 h-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* دکمه‌ها */}
      {step < steps.length - 1 ? (
        <div className="flex flex-col items-center gap-4 mt-6 w-full relative ">
          <button
            className="bg-[#FF7622] w-[327px] h-[62px] rounded-[12px] text-white text-lg font-semibold relative top-[200]"
            onClick={handleNext}
          >
            Next
          </button>
          <button className="text-gray-500 text-lg font-medium relative top-[230]" onClick={handleSkip}>
            Skip
          </button>
        </div>
      ) : null}
    </div>
  );
}
