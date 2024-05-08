import useGetConversations from "../hooks/usegetconvos.js";
import Convo from "./convo";

const convos = () => {
  const { loading, convo } = useGetConversations();

  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {convo.map((convo, idx) => (
        <Convo
          key={convo._id}
          convo={convo}
          lastIdx={idx === convo.lenght - 1}
        />
      ))}
    </div>
  );
};

export default convos;
