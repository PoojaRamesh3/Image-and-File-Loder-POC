import { useNavigate } from "react-router-dom";

const DataList = (props: any) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/2");
  };

  return (
    <div>
      <div>{JSON.stringify(props.dataObj)}</div>
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
