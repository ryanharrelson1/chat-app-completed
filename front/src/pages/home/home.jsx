import React from "react";
import Sidebar from "../../componets/sidebar";
import Messgaecontainer from "../../componets/messages/messgaecontainer";

const home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <Messgaecontainer />
    </div>
  );
};

export default home;
