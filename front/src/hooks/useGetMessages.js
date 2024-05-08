import { useEffect, useState } from "react";
import useConvo from "../zustand/useconversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selected } = useConvo();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selected._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selected?._id) getMessages();
  }, [selected?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
