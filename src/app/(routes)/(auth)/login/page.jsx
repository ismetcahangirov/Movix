"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser, loginWithGoogle } from "@/firebase/auth";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email daxil edin";
    if (!formData.password.trim()) newErrors.password = "Şifrə daxil edin";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      await loginUser(formData.email, formData.password);
      router.push("/dashboard");
    } catch (error) {
      setErrors({ email: "Email və ya şifrə səhvdir" });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      alert("Google ilə giriş zamanı səhv baş verdi: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#060D17] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0D1524] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Login</h2>

        <label className="block mb-1 text-white">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 rounded mb-2"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        <label className="block mb-1 text-white">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 rounded mb-2"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-4"
        >
          Google ilə daxil ol
        </button>

        <p className="mt-4 text-left text-white">
          Hesabınız yoxdur?{" "}
          <Link href="/register" className="text-blue-400 ml-1 hover:underline">
            Qeydiyyatdan keçin
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
