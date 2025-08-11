"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { clearUser, setUser } from "@/app/redux/features/authSlice";
import { auth, db } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          dispatch(setUser(docSnap.data()));
        }
      } else {
        router.push("/login");
      }
    });

    return () => unsub();
  }, [dispatch, router]);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
    router.push("/login");
  };

  if (!currentUser) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">
        Xoş gəldiniz, {currentUser.username}
      </h1>
      <p className="text-lg mb-1">{currentUser.email}</p>
      <p className="text-sm mb-6">
        {currentUser.createdAt?.toDate().toLocaleString()}
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Çıxış
      </button>
    </div>
  );
};

export default DashboardPage;
