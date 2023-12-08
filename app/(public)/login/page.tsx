"use client";
import Input from "@/app/components/Input";
import Logo from "@/app/components/Logo";
import User from "@/app/model/User";
import loginSchema from "@/app/model/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: FieldValues) => {
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]") || [];
    const loggedInUser = allUsers.find((el: User) => el.email === data.email);
    if (loggedInUser && loggedInUser.password === data.password) {
      localStorage.setItem("currentUser", loggedInUser);
      router.push("/");
      toast.success("Logged in successfully");
    } else {
      toast.error("Email or Password is wrong!");
    }
  };
  return (
    <form
      className="shadow-lg p-10 rounded-md text-center flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-bold text-3xl mb-4">Login</h1>
      <Logo className="mb-4" />
      <Link
        href={"/register"}
        className="text-xs underline underline-offset-2 mb-6"
      >
        Sign up
      </Link>

      <Input
        name="email"
        label="Email"
        width="w-[200px]"
        register={register}
        error={errors?.email?.message?.toString()}
      />
      <Input
        name="password"
        label="Password"
        width="w-[200px]"
        type="password"
        register={register}
        error={errors?.password?.message?.toString()}
      />

      <div className="flex gap-6 mt-6">
        <button type="submit" className="btn">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
