import React from "react";
import useConvo from "../zustand/useconversation";
import { useSocketContext } from "../context/socketcontext";

const convo = ({ convo, lastidx }) => {
  const { selected, setSelected } = useConvo();

  const isSlected = selected?._id === convo._id;
  const { onlineUser } = useSocketContext();

  const isonline = onlineUser.includes(convo._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer
         ${isSlected ? "bg-sky-500" : ""}
      
      
      `}
        onClick={() => setSelected(convo)}
      >
        <div className={`avatar ${isonline ? "online" : ""} `}>
          <div className="w-12 rounded-full">
            <img src={convo.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{convo.fullName}</p>
            <span className="text-xl">:)</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default convo;
