"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { handleSignup } from "@/services/auth";

import Alert from "../ui/alert";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm();

  const router = useRouter();
  const [signupErrors, setSignupErrors] = useState(false);
  const callbackUrl = router.query?.callbackUrl ?? "/";
  const onSubmit = async (data) => {
    const response = await handleSignup({ ...data, role: "user" });
    const createdUser = await response.response.data;
    console.log(createdUser);
    if (createdUser) {
      switch (createdUser.status) {
        case "existing_user": {
          setSignupErrors({
            type: "existing_user",
            message: "User Allready Exist with this Email",
          });

          break;
        }
        case "user_creation_failed": {
          setSignupErrors({
            type: "user_creation_failed",
            message: "Registration Failed Something Wrong",
          });

          break;
        }
        case "user_created": {
          router.push(callbackUrl);
          break;
        }
        default:
          break;
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-white-950 p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <>
              {signupErrors && (
                <Alert type="error" message={signupErrors.message} />
              )}
            </>
          </div>
          <div className="max-w-sm rounded-3xl bg-gradient-to-b from-red-300 to-purple-500 p-px dark:from-white-800 dark:to-transparent">
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
                    {...register("name", {
                      required: "Please enter your name",
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p className="!m-0 text-red-500  text-xs">
                      {errors.name?.message}
                    </p>
                  )}

                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: "Please enter your Email",
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="!m-0 text-red-500 text-xs">
                      {errors.email?.message}
                    </p>
                  )}
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", {
                      required: "Please enter password",
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="!m-0 text-red-500 text-xs">
                      {errors.password?.message}
                    </p>
                  )}
                  <input
                    className="w-full bg-transparent text-white-600 text-gray-700 dark:border-white-700 rounded-md border border-white-300 px-3 py-2 text-sm placeholder-white-600 invalid:border-red-500 dark:placeholder-white-300"
                    placeholder="Confirm Password"
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    {...register("cpassword", {
                      required: "Please confirm password",
                    })}
                  />
                  {errors.cpassword?.type === "required" && (
                    <p className="!m-0 text-red-500 text-xs">
                      {errors.cpassword?.message}
                    </p>
                  )}
                </div>
                <button className="h-9 px-3 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 focus:bg-red-700 transition duration-500 rounded-md text-white">
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
