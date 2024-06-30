"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/navigation";

export const useLoginHook = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch }: any = useAuthContext();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8000/api/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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
  return { login, isLoading, error };
};
