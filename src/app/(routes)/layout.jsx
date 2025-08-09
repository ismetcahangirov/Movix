"use client";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { setUser, clearUser } from "../redux/features/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsub();
  }, [dispatch]);

  return children;
};

const RoutesLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Header />
        <div className="container mx-auto w-full max-w-[1280px] px-4">
          {children}
        </div>
        <Footer />
      </AuthProvider>
    </Provider>
  );
};

export default RoutesLayout;
