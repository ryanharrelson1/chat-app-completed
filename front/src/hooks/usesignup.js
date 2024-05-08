import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthontext } from "../context/authcontext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthontext();

  const newuser = async ({ fullName, username, password, confirmPassword }) => {
    // Perform client-side validation
    const success = handleErrors({
      fullName,
      username,
      password,
      confirmPassword,
    });

    // If validation fails, return
    if (!success) return;

    // Set loading state to true before making the request
    setLoading(true);
    console.log(password, confirmPassword);
    try {
      // Send POST request to the server
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword }),
      });

      // Parse response JSON
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("auth-user", JSON.stringify(data));
      setAuthUser(data);

      // Log response data
    } catch (error) {
      // Handle errors, e.g., network errors
      toast.error(error.message);
    } finally {
      // Reset loading state after request completes
      setLoading(false);
    }
  };

  // Return loading state and newuser function
  return { loading, newuser };
};

// Function for client-side validation
function handleErrors({ fullName, username, password, confirmPassword }) {
  // Validate each field
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Please fill out all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password is too short");
    return false;
  }

  // If all validations pass, return true
  return true;
}

export default useSignup;
