"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignupHook } from "../../../../context/hooks/useSignupHook";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const { signUp, isLoading, error } = useSignupHook();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signUp(userName as string, email as string, password as string);
  };

  return (
    <div className="w-screen">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="userName"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={isLoading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {"Sign Up"}
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link href={"/login"}>
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
