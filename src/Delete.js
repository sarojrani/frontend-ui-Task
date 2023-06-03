import DeleteLogo from "./deleteicon.png";
import CopyLogo from "./copyicon.png";
const Delete = () => {
  return (
    <>
      <ul className="border-2 p-2 border-black h-40 w-48">
        <li className="  flex  font-semibold">
          <img
            className="p-2 mb-3"
            src={DeleteLogo}
            alt="logo"
        
            width="50"
          />
          Delete
        </li>
        <li className=" m-1 flex  font-semibold">
          <img
            className="p-2 "
            src={CopyLogo}
            alt="logo"
        
            width="40"
          />
          Duplicate
        </li>
      </ul>
    </>
  );
};
export default Delete;
