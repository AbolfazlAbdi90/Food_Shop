"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "./component/Splash-Screen";
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // یا هر صفحه‌ای که لاگین تو هست
    }
  }, []);

  return (
    <div>
     
      <SplashScreen />
    </div>
  );
}
