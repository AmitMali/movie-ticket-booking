"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "@/services/auth";
import { redirect } from "next/navigation";
import Alert from "../ui/alert";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const logedinUser = await handleLogin(data.email, data.password);
    if (logedinUser.status === 201) {
      setLoginSuccess(true);
      reset();
      redirect();
    } else setLoginSuccess("loginFailed");
  };
  return (
    <div>
      <div className="my-2">
        {loginSuccess == true ? (
          <>
            <Alert type="success" message={`Login Successfully `} />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-white-950 p-12">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            {loginSuccess == "loginFailed" ? (
              <>
                <Alert type="error" message={`Login Failed `} />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-white-800 dark:to-transparent">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-white-900">
              <div className="mt-8 space-y-8">
                <div className="space-y-6">
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                </div>
                <button className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                  Login
                </button>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white-800 dark:text-white">
                  Login to your account
                </h1>
                <p className="text-sm tracking-wide text-white-600 dark:text-white-300">
                  Don't have an account ?
                  <Link
                    href="/auth/signup"
                    className="mx-1 text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                  >
                    Signup
                  </Link>
                  for free
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
