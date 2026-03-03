import { useState } from "react";

export default function useSignup(url) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (creds) => {
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.error)
        return
      }
      localStorage.setItem("user", JSON.stringify(data));
    } catch (e) {
      console.error("signup ERROR:", e)
    }
    finally {
      setIsLoading(false)
    }
    return error ? true : false
  }
  return { signup, isLoading, error }
}
