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
import { Button } from "@radix-ui/themes";
import { createUser } from "@/app/services/user";
const RegisterPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    delete data.repeatPassword;
    const newUser = { ...data, id: uuidv4() } as User;
    try {
      await createUser(newUser);
      toast.success("User created successfully");
      setTimeout(() => router.push("/"), 700);
    } catch (error: any) {
      toast.error(error.message);
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
        <Button type="reset">Cancel</Button>
        <Button type="submit" className="btn">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default RegisterPage;
