"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/features/authSlice";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username.trim())
      newErrors.username = "İstifadəçi adı daxil edin";
    if (!formData.email.trim()) newErrors.email = "Email daxil edin";
    if (!formData.age.trim()) newErrors.age = "Yaş daxil edin";
    if (!formData.gender) newErrors.gender = "Cins seçin";
    if (!formData.password) newErrors.password = "Şifrə daxil edin";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Şifrələr uyğun deyil";

    const emailExists = users.find((u) => u.email === formData.email);
    if (emailExists) newErrors.email = "Bu email artıq qeydiyyatdadır";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(
      registerUser({
        username: formData.username,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
        password: formData.password,
      })
    );

    setFormData({
      username: "",
      email: "",
      age: "",
      gender: "",
      password: "",
      confirmPassword: "",
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#060D17] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0D1524] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Register</h2>

        <Input
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />

        <Input
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
        />

        <div className="mb-4">
          <label className="block mb-2 text-white font-medium">Gender</label>
          <div className="flex gap-6 text-white">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-4 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
