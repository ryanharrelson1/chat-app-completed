import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkelton from "../skeletons/MessageSkelton";
import Message from "./message";
import useListenMessages from "../../hooks/useListenMessages";

const messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessgaeRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessgaeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessgaeRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkelton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">It's quiet here start A Chat!</p>
      )}
    </div>
  );
};

export default messages;
