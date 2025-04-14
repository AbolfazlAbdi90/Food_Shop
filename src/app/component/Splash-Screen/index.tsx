"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Onboarding from "../onbording";

export default function SplashScreen() {
  // state
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");

    if (hasSeenSplash) {
      // اگه قبلاً دیده، اسپلش نشون نده
      setShowSplash(false);

      // اگه onboarding رو ندیده بود، نشونش بده
      if (!hasSeenOnboarding) {
        setShowOnboarding(true);
      }
    } else {
      // برای اولین بار: ۳ ثانیه اسپلش نشون بده، بعد onboarding
      setTimeout(() => {
        setShowSplash(false);
        if (!hasSeenOnboarding) {
          setShowOnboarding(true);
        }
        localStorage.setItem("hasSeenSplash", "true");
      }, 3000);
    }

    setLoading(false);
  }, []);

  if (loading) return null;

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        {/* top image */}
        <div className="absolute top-0 left-0">
          <Image src="/image/Ellipse 1005.png" alt="Top Decoration" width={177} height={177} />
        </div>

        {/* وسط لوگو غذا */}
        <div className="z-10 mb-6">
          <Image src="/image/Logo (2).png" alt="Logo" width={122} height={59} />
        </div>

        {/* زیر لوگو */}
        <div className="absolute bottom-0 right-0">
          <Image src="/image/Ellipse 1006.png" alt="Bottom Decoration" width={292} height={295} />
        </div>
      </div>
    );
  }

  if (showOnboarding) return <Onboarding />;

  return <div>صفحه اصلی</div>;
}

