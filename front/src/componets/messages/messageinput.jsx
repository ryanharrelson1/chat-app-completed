import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/usesendmessgae";

const messageinput = () => {
  const [message, setMessages] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const hanedlSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessages("");
  };
  return (
    <form className="px-4 my-3" onSubmit={hanedlSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="send message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessages(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default messageinput;
