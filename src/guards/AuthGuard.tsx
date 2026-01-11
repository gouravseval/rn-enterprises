import { redirect } from "react-router-dom";

export function authGuard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return redirect("/login");
  }

  return null; // allow page to load
}
