import { redirect } from "next/navigation";
import Login from "./login";

const LoginPage = () => {
  const redirectPage = () => {
    redirect("/");
  };
  return typeof window !== "undefined" &&
    window.localStorage.getItem("token") ? (
    redirectPage
  ) : (
    <Login />
  );
};

export default LoginPage;
