"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "@/firebase/auth";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email daxil edin";
    if (!formData.password) newErrors.password = "Şifrə daxil edin";
    if (formData.password.length < 6)
      newErrors.password = "Şifrə ən az 6 simvol olmalıdır";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Şifrələr uyğun deyil";
    if (!formData.username.trim()) newErrors.username = "Username daxil edin";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      await registerUser(formData.email, formData.password, formData.username);
      router.push("/login");
    } catch (error) {
      setErrors({ email: "Bu email artıq qeydiyyatdadır" });
    }
  };

  return (
    <div className="min-h-screen bg-[#060D17] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0D1524] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Register</h2>

        <label className="block mb-1 text-white">Username</label>
        <input
          type="text"
          name="username"
          className="w-full p-2 rounded mb-2"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mb-2">{errors.username}</p>
        )}

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

        <label className="block mb-1 text-white">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full p-2 rounded mb-2"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mb-2">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-4"
        >
          Register
        </button>

        <p className="mt-4 text-left text-white">
          Hesabınız var?{" "}
          <Link href="/login" className="text-blue-400 ml-1 hover:underline">
            Daxil olun
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
