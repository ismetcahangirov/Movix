"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginUser } from "@/features/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const users = useSelector((state) => state.auth.users);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email daxil edin";
    if (!formData.password.trim()) newErrors.password = "Şifrə daxil edin";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const findUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (findUser) {
      dispatch(loginUser(findUser));
      router.push("/dashboard");
    } else {
      setErrors({ email: "Email və ya şifrə səhvdir" });
    }
  };

  return (
    <div className="min-h-screen bg-[#060D17] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0D1524] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Login</h2>

        <Input
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
