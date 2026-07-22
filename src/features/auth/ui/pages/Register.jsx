import React from "react";
import { useWatch } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth"; // Change the path if needed
import HeroScene from "./HeroScene";

import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { TbCirclesRelation } from "react-icons/tb";

export default function Register() {
 const {
  register,
  handleSubmit,
  control,
  errors,
  onRegisterSubmit,
  navigate,
} = useAuth();

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getStrength();

  

  return (
    <div className="min-h-screen bg-[#131118] lg:grid lg:grid-cols-2">
    {/* LEFT SIDE */}

<div className="hidden lg:flex relative overflow-hidden">

  {/* 3D Scene */}
  <div className="absolute inset-0">
   <HeroScene /> 
</div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Text */}
  <div className="relative z-10 flex flex-col justify-between h-full p-10 text-white">

    <h2 className="text-xl font-bold">
      Synthetix AI
    </h2>

    <div>

      <p className="uppercase tracking-[4px] text-xs text-violet-300 mb-5">
        ✦ NEXT-GEN INTELLIGENCE
      </p>

      <h1 className="text-5xl font-bold leading-tight">
        Accelerate your team's intelligence.
      </h1>

      <p className="mt-6 max-w-md text-gray-300 leading-7">
        Connect your enterprise data to our specialized AI
        models and unlock unparalleled strategic insights
        in seconds.
      </p>

      <div className="flex gap-12 mt-12">

        <div>
          <h3 className="text-3xl font-bold">
            99.9%
          </h3>

          <p className="text-gray-400">
            Uptime SLA
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            ISO
          </h3>

          <p className="text-gray-400">
            27001 Certified
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

      {/* RIGHT SIDE */}

      <div className="flex items-center justify-center px-6 py-10">
        <form
          onSubmit={handleSubmit(onRegisterSubmit)}
          className="w-full max-w-md space-y-6 text-white"
        >
          <div>
            <h1 className="text-4xl font-bold">
              Create your account
            </h1>

            <p className="mt-2 text-gray-400">
              Experience the future of collaborative data intelligence.
            </p>
          </div>

          {/* NAME */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name
            </label>

            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                {...register("name", {
                  required: "Full name is required",
                })}
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[#393541] bg-[#1B1820] py-3 pl-12 pr-4 outline-none focus:border-violet-500"
              />
            </div>

            {errors.name && (
              <p className="text-red-400 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="name@company.com"
                className="w-full rounded-lg border border-[#393541] bg-[#1B1820] py-3 pl-12 pr-4 outline-none focus:border-violet-500"
              />
            </div>

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message:
                      "Password must contain at least 8 characters",
                  },
                })}
                placeholder="••••••••"
                className="w-full rounded-lg border border-[#393541] bg-[#1B1820] py-3 pl-12 pr-4 outline-none focus:border-violet-500"
              />
            </div>

            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`h-1 flex-1 rounded-full ${
                    bar <= strength
                      ? "bg-violet-400"
                      : "bg-[#2A2630]"
                  }`}
                />
              ))}
            </div>

            <p className="text-xs mt-2 text-violet-400">
              {strength === 4
                ? "Strong password"
                : strength >= 2
                ? "Medium password"
                : "Weak password"}
            </p>
          </div>

          {/* TERMS */}

          <div>
            <label className="flex items-center gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "Accept terms first",
                })}
                className="accent-violet-500"
              />

              I agree to the
              <span className="text-violet-400">
                Terms of Service
              </span>
              and
              <span className="text-violet-400">
                Privacy Policy
              </span>
            </label>

            {errors.terms && (
              <p className="text-red-400 text-sm mt-2">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* BUTTON */}

          <button
            className="w-full rounded-lg bg-linear-to-r from-[#7B5CF4] to-[#C7B5FF] py-3 font-semibold text-[#170E25] hover:opacity-95 transition flex justify-center items-center gap-2"
          >
            Create Account
            <FiArrowRight />
          </button>

          {/* DIVIDER */}

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#393541]" />

            <span className="text-xs text-gray-500">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-[#393541]" />
          </div>

          {/* SOCIAL */}

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="border border-[#393541] rounded-lg py-3 flex items-center justify-center gap-2 hover:border-violet-500"
            >
              <FcGoogle size={20} />
              Google
            </button>

            <button
              type="button"
              className="border border-[#393541] rounded-lg py-3 flex items-center justify-center gap-2 hover:border-violet-500"
            >
              <TbCirclesRelation size={20} />
              SSO
            </button>
          </div>

          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              type="button"
              className="text-violet-400 font-semibold"
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}