import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "../hooks/useLogout";

const logoutbutton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      <IoIosLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};

export default logoutbutton;
