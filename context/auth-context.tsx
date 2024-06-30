"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext({});

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      router.push("/");
    }
    if (!user) {
      router.push("/login");
    }
  }, []);

  console.log("Auth Context State:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
