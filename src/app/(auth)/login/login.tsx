"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { userDataLogin } from "../../../../redux/actions/user";
import axios from "axios";
import { useLoginHook } from "../../../../context/hooks/useLoginHook";
// import { useAuth } from "../../../../context/AuthContext";
const Login = () => {
  // const [formData, setFormData] = useState<any>();
  //   const { login, isAuthenticated, loading } = useAuth();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { login, isLoading, error } = useLoginHook();

  const handleSubmit = async () => {
    await login(email as string, password as string);
    // console.log(formData);
    // const data = await login(formData?.email, formData.password);
    // if (data && data.response && data.response.status === 401) {
    //   setShowError("The Username or Password you entered is incorrect.");
    //   form.setFields([
    //     { name: "username", errors: [""] },
    //     { name: "password", errors: [""] }
    //   ]);
    // }
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:8000/api/user/auth",
    //     formData
    //   );
    //   localStorage.setItem("token", data?.token);
    //   router.push("/");
    // } catch (error) {
    //   console.log(error, "ERROR");
    // }
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("token")) {
  //       router.push("/");
  //     }
  //   }, []);

  return (
    <div className="w-screen">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Log In</h1>
        <form action={handleSubmit} className="flex flex-col gap-4">
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
            type="submit"
            // disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Login
            {/* {loading ? "Loading..." : ""} */}
          </button>
          {/* <OAuth /> */}
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link href={"/signup"}>
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
        {/* <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p> */}
      </div>
    </div>
  );
};

export default Login;
