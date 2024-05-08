import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [convo, setConvo] = useState([]);

  useEffect(() => {
    const getConvo = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConvo(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConvo();
  }, []);

  return { loading, convo };
};

export default useGetConversations;
