import Searchbar from "./searchbar";
import Convos from "./convos";
import Logoutbutton from "./logoutbutton";

const sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Searchbar />
      <div className="divider px-3"></div>
      <Convos />

      <Logoutbutton />
    </div>
  );
};

export default sidebar;
