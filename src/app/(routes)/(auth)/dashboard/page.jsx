"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/features/authSlice";

const DashboardPage = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/login");
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#060D17] flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-xl mb-8">
        Xoş gəldin, <span className="underline">{currentUser.username}</span>!
      </p>

      <div className="bg-[#0D1524] rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Profil məlumatları</h2>
        <ul className="space-y-2">
          <li>
            <strong>Email:</strong> {currentUser.email}
          </li>
          <li>
            <strong>Yaş:</strong> {currentUser.age}
          </li>
          <li>
            <strong>Cins:</strong> {currentUser.gender}
          </li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition"
      >
        Çıxış
      </button>
    </div>
  );
};

export default DashboardPage;
