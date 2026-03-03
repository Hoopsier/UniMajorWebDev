import { useState } from "react";

export default function useLogin(url) {
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState(null);
  const login = async (creds) => {
    setError(null);
    setIsLoading(true)

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      });
      const user = await response.json();

      if (!response.ok) {
        setError(user.error);
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      console.log("success");
      setIsAuthenticated(true);
    }
    catch (e) {
      console.error("login ERROR:", e)
      return;
    }
    finally {
      setIsLoading(false)
    }
  }
  return { login, isLoading, error }
}
