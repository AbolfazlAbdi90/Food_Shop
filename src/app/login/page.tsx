"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

   const handleLogin = () => {
    // بعد از لاگین موفق
    router.push("/getLocation");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 mb-4 w-64 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-6 w-64 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-[#FF7622] text-white py-2 px-6 rounded-lg"
      >
        ورود
      </button>
    </div>
  );
}
