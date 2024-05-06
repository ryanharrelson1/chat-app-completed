import Convo from "./convo";

const convos = () => {
  return (
    <div className=" py-2 flex flex-col overflow-auto">
      <Convo />
      <Convo />
      <Convo />
    </div>
  );
};

export default convos;
