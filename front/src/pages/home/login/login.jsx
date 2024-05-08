import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handelSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-green-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">Dicord App</span>
        </h1>
        <form onSubmit={handelSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Dont"} have an account
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-green-600 hover:text-black">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
