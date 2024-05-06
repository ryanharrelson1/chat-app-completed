import React from "react";

const signup = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-green-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              l
              required
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              required
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
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">confirmpassword</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              required
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            already have an account
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-green-600 hover:text-black">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
