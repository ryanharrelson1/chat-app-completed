import Messages from "./messages";
import Messageinput from "./messageinput";
import { TiMessages } from "react-icons/ti";
import useConvo from "../../zustand/useconversation";
import { useEffect } from "react";
import { useAuthontext } from "../../context/authcontext";
const messgaecontainer = () => {
  const { selected, setSelected } = useConvo();

  useEffect(() => {
    return () => setSelected(null);
  }, [setSelected]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold ml-2">
              {selected.fullName}
            </span>
          </div>
          <Messages />
          <Messageinput />
        </>
      )}
    </div>
  );
};

export default messgaecontainer;

const NoChatSelected = () => {
  const { authUser } = useAuthontext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg Md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
