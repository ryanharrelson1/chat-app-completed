import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthontext } from "../context/authcontext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthontext();

  const login = async ({ username, password }) => {
    const success = handleErrors({
      username,
      password,
    });

    // If validation fails, return
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("auth-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleErrors({ username, password }) {
  // Validate each field
  if (!username || !password) {
    toast.error("Please fill out all fields");
    return false;
  }

  // If all validations pass, return true
  return true;
}
