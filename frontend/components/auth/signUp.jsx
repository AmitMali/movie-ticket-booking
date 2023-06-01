"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { handleSignup } from "@/services/auth";
import { redirect } from "next/navigation";
import Alert from "../ui/alert";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [signupSuccess, setSignupSuccess] = useState(false);

  const onSubmit = async (data) => {
    const createdUser = await handleSignup({ ...data, role: "user" });
    if (createdUser.status === 201) {
      setSignupSuccess(true);
      reset();
      redirect();
    } else alert("something went wrong");
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-white-950 p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            {signupSuccess ? (
              <>
                <Alert
                  type="success"
                  message={`Account Created Successfully `}
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-white-800 dark:to-transparent">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-white-900">
              <h1 className="text-xl font-semibold text-white-800 text-gray-700">
                Create your account
              </h1>
              <div className="mt-8 space-y-8">
                <div className="space-y-6">
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert">name is required</p>
                  )}

                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    id="password"
                    {...register("password")}
                  />
                  {errors.password?.type === "required" && (
                    <p role="alert">Password is required</p>
                  )}
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
