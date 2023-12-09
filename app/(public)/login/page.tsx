"use client";
import { Input, Logo } from "@/app/components";
import { loginSchema } from "@/app/model";
import { login } from "@/app/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const onSubmit = async (data: FieldValues) => {
    try {
      await login(data as { email: string; password: string });
      toast.success("Logged in successfully");
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
        <Button type="submit" className="btn">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
