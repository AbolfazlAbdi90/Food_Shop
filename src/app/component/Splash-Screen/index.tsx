"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Onboarding from "../onbording";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");

    if (hasSeenSplash) {
      setShowSplash(true);
      if (!hasSeenOnboarding) setShowOnboarding(true);
    } else {
      setTimeout(() => {
        setShowSplash(false);
        if (!hasSeenOnboarding) setShowOnboarding(true);
        localStorage.setItem("hasSeenSplash", "true");
      }, 3000);
    }

    setLoading(false);
  }, []);

  if (loading) return null;

  if (showSplash) {
    return (
      <div className="overflow-x-hidden">
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          {/* تصویر بالا - ورود از چپ */}
          <motion.div
            className="absolute top-0 left-0"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/image/Ellipse 1005.png"
              alt="Top Decoration"
              width={177}
              height={177}
            />
          </motion.div>

          {/* لوگو وسط */}
          <div className="z-10 mb-6">
            <Image
              src="/image/Logo (2).png"
              alt="Logo"
              width={122}
              height={59}
            />
          </div>

          {/* تصویر پایین - ورود از راست */}
          <motion.div
            className="absolute bottom-0 right-0"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/image/Ellipse 1006.png"
              alt="Bottom Decoration"
              width={292}
              height={295}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  if (showOnboarding) return <Onboarding />;

  return <div>صفحه اصلی</div>;
}



