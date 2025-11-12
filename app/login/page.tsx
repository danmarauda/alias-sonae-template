"use client";

import { Eye, EyeOff, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid min-h-screen bg-gray-50 lg:grid-cols-[3fr_2.5fr] dark:bg-black/30">
      {/* Left side - Image background with content */}
      <div className="relative flex min-h-[500px] flex-col items-center justify-center p-6 py-12 sm:p-8 lg:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-4 z-0 overflow-hidden rounded-xl sm:inset-6 lg:inset-8">
          <Image
            alt="Background"
            className="object-cover object-center"
            fill
            priority
            src="/bg-glass.png"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto w-full max-w-md space-y-4 px-4 text-center text-white sm:space-y-6 sm:px-0">
          {/* Logo/Brand */}
          <div className="mb-6 sm:mb-8">
            <h1 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              ✺ Sonae
            </h1>
          </div>

          {/* Main Title */}
          <h2 className="font-semibold text-2xl leading-tight tracking-tighter sm:text-3xl">
            Unlock the best of Sonae. Access to the future of Agents.
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-200 leading-relaxed tracking-tighter sm:text-lg">
            1000+ developers creating amazing experiences with Agents.
          </p>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="flex flex-col justify-center p-6 py-12 sm:p-8 lg:p-12">
        <div className="mx-auto w-full max-w-lg">
          {/* Header */}
          <div className="mb-8 space-y-2 text-center">
            <h1 className="bg-linear-to-r from-zinc-800 to-zinc-600 bg-clip-text font-bold text-2xl text-transparent tracking-tighter dark:from-white dark:to-zinc-400">
              Create your account
            </h1>
            <p className="text-base text-zinc-500 tracking-tighter dark:text-zinc-400">
              Join our community today
            </p>
          </div>

          <div className="space-y-6">
            {/* Social buttons row */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                className="group relative h-12 border-zinc-200 bg-zinc-50 ring-1 ring-zinc-100 transition duration-200 hover:border-zinc-300 hover:bg-white dark:border-zinc-800/50 dark:bg-[#1a1a1a] dark:ring-zinc-800/50 dark:hover:border-zinc-700 dark:hover:bg-[#222222]"
                variant="outline"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <title>Google Logo</title>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-medium text-zinc-700 tracking-tighter dark:text-zinc-300">
                  Sign in with Google
                </span>
              </Button>

              <Button
                className="group relative h-12 border-zinc-200 bg-zinc-50 ring-1 ring-zinc-100 transition duration-200 hover:border-zinc-300 hover:bg-white dark:border-zinc-800/50 dark:bg-[#1a1a1a] dark:ring-zinc-800/50 dark:hover:border-zinc-700 dark:hover:bg-[#222222]"
                variant="outline"
              >
                <Github className="mr-2 h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                <span className="font-medium text-zinc-700 tracking-tighter dark:text-zinc-300">
                  Sign in with Github
                </span>
              </Button>
            </div>

            {/* Delimiter */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-zinc-200 border-t dark:border-zinc-800/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-50 px-4 font-medium text-zinc-400 tracking-tighter dark:bg-black/30 dark:text-zinc-500">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Form inputs */}
            <div className="space-y-4">
              {/* First name and Last name row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label
                    className="font-medium text-sm text-zinc-700 tracking-tighter dark:text-zinc-300"
                    htmlFor="firstName"
                  >
                    First name
                  </Label>
                  <Input
                    className="h-12 border-zinc-200 bg-zinc-50 dark:border-zinc-800/50 dark:bg-[#1a1a1a]"
                    id="firstName"
                    placeholder="John"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    className="font-medium text-sm text-zinc-700 tracking-tighter dark:text-zinc-300"
                    htmlFor="lastName"
                  >
                    Last name
                  </Label>
                  <Input
                    className="h-12 border-zinc-200 bg-zinc-50 dark:border-zinc-800/50 dark:bg-[#1a1a1a]"
                    id="lastName"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>

              {/* Email full row */}
              <div className="space-y-2">
                <Label
                  className="font-medium text-sm text-zinc-700 tracking-tighter dark:text-zinc-300"
                  htmlFor="email"
                >
                  Email address
                </Label>
                <Input
                  className="h-12 border-zinc-200 bg-zinc-50 dark:border-zinc-800/50 dark:bg-[#1a1a1a]"
                  id="email"
                  placeholder="john.doe@example.com"
                  type="email"
                />
              </div>

              {/* Password full row */}
              <div className="space-y-2">
                <Label
                  className="font-medium text-sm text-zinc-700 tracking-tighter dark:text-zinc-300"
                  htmlFor="password"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    className="h-12 border-zinc-200 bg-zinc-50 pr-12 dark:border-zinc-800/50 dark:bg-[#1a1a1a]"
                    id="password"
                    placeholder="Choose your password"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="-translate-y-1/2 absolute top-1/2 right-3 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <Button className="group relative h-12 w-full overflow-hidden bg-linear-to-r from-zinc-900 to-zinc-800 font-medium text-white shadow-lg shadow-zinc-200/20 transition-all duration-300 hover:from-orange-500 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-50 dark:from-white dark:to-zinc-200 dark:text-[#121212] dark:shadow-black/20 dark:hover:from-orange-400 dark:hover:to-orange-600">
                <div className="relative flex items-center justify-center gap-2">
                  <span className="font-medium tracking-tighter">
                    Create account
                  </span>
                </div>
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-zinc-500 tracking-tighter dark:text-zinc-400">
              By continuing, you agree to our{" "}
              <a
                className="font-medium text-zinc-800 tracking-tighter underline decoration-zinc-200 underline-offset-4 transition-colors hover:text-zinc-600 dark:text-white dark:decoration-zinc-700 dark:hover:text-zinc-200"
                href="/terms"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="font-medium text-zinc-800 tracking-tighter underline decoration-zinc-200 underline-offset-4 transition-colors hover:text-zinc-600 dark:text-white dark:decoration-zinc-700 dark:hover:text-zinc-200"
                href="/privacy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
