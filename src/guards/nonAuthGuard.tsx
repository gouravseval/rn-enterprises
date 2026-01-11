import { redirect } from "react-router-dom";

export function nonAuthGuard() {
  const token = localStorage.getItem("token");

  if (token) {
    return redirect("/dashboard");
  }

  return null; // allow page to load
}
