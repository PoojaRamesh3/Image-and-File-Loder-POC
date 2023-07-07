import { useNavigate } from "react-router-dom";

const DataList = () => {
  const data = {
    id: 1,
    name: "Pooja R",
    place: "Mysore",
    age: 24,
    phno: 8123512259,
  };

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/2", { state: data });
  };

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <button
        className="px-5 py-3 bg-black text-white"
        onClick={() => onClickHandler()}
      >
        NEXT
      </button>
    </div>
  );
};

export default DataList;
