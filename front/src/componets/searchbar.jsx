import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConvo from "../zustand/useconversation";
import useGetConversations from "../hooks/usegetconvos";
import toast from "react-hot-toast";

const searchbar = () => {
  const [search, setSearch] = useState("");
  const { setSelected } = useConvo();
  const { convo } = useGetConversations();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("serach term must be at least 3 characters long");
    }
    const conversation = convo.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelected(convo);
      setSearch("");
    } else {
      toast.error("no conversation found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none " />
      </button>
    </form>
  );
};

export default searchbar;
