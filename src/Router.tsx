import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataList from "./DataList";
import DataList2 from "./DataList2";

const Router = () => {
  const data = {
    id: 1,
    name: "Pooja R",
    place: "Mysore",
    age: 24,
    phno: 8123512259,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataList dataObj={data} />} />
        <Route path="/2" element={<DataList2 dataObj={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
