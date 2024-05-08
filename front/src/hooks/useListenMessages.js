import { useEffect } from "react";
import { useSocketContext } from "../context/socketcontext";
import useConvo from "../zustand/useconversation";
import notify from "../../public/alert.mp3";
const useListenMessages = () => {
  const { socket } = useSocketContext();

  const { messages, setMessages } = useConvo();

  useEffect(() => {
    socket?.on("newMessage", (newmessage) => {
      const sound = new Audio(notify);
      sound.play();
      setMessages([...messages, newmessage]);
    });

    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
