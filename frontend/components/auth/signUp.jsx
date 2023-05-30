"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { handleSignup } from "@/services/auth";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => await handleSignup(data);
  console.log(onSubmit);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-white-950 p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-white-800 dark:to-transparent">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-white-900">
              <div className="mt-8 space-y-8">
                <div className="space-y-6">
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    id="name"
                    {...register("name")}
                  />
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                    {...register("email")}
                  />
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    id="password"
                    {...register("password")}
                  />
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Confirm Password"
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    {...register("cpassword")}
                  />
                </div>
                <button className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                  Signup
                </button>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white-800 text-gray-700">
                  Signin to your account
                </h1>
                <p className="text-sm tracking-wide text-white-600 text-gray-700-300">
                  have an account ?
                  <Link
                    href="auth/login"
                    className="text-blue-600 ml-1 transition duration-200 hover:underline dark:text-blue-400"
                  >
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
