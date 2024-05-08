import { useAuthontext } from "../../context/authcontext.jsx";
import { extractTime } from "../../utils/extracttime.js";
import useConvo from "../../zustand/useconversation";

const message = ({ message }) => {
  const { authUser } = useAuthontext();
  const { selected } = useConvo();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selected?.profilePic;
  const bubblebgcolor = fromMe ? "bg-blue-500" : "";
  const formatetime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="chat bubble" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubblebgcolor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatetime}
      </div>
    </div>
  );
};

export default message;
