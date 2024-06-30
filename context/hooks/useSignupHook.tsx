"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useSignupHook = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch }: any = useAuthContext();
  const router = useRouter();

  const signUp = async (userName: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      router.push("/");
    }
  };
  return { signUp, isLoading, error };
};
