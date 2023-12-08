"use client";
import Input from "@/app/components/Input";
import Logo from "@/app/components/Logo";
import User from "@/app/model/User";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import signupSchema from "@/app/model/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
const RegisterPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: FieldValues) => {
    delete data.repeatPassword;
    const newUser = { ...data, id: uuidv4() } as User;
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]") || [];
    if (allUsers.find((el: User) => el.email === newUser.email)) {
      toast.error("This email already exists");
    } else {
      allUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(allUsers));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      toast.success("User created successfully");
      router.push("/");
    }
  };
  return (
    <form
      className="shadow-lg p-10 rounded-md text-center flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-bold text-3xl mb-4">Sign up</h1>
      <Logo className="mb-4" />
      <Link
        href={"/login"}
        className="text-xs underline underline-offset-2 mb-6"
      >
        Have Account?
      </Link>
      <Input
        name="fullName"
        label="Full Name"
        width="w-[200px]"
        register={register}
      />
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
      <Input
        name="repeatPassword"
        label="Repeat Password"
        width="w-[200px]"
        type="password"
        register={register}
        error={errors?.repeatPassword?.message?.toString()}
      />
      <div className="flex gap-6 mt-6">
        <button type="reset">Cancel</button>
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
