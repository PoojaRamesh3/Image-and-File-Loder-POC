import { useLocation } from "react-router-dom";

const DataList2 = () => {
  let { state } = useLocation();

  return <div>{state.name}</div>;
};

export default DataList2;
