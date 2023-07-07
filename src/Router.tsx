import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataList from "./DataList";
import DataList2 from "./DataList2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataList />} />
        <Route path="/2" element={<DataList2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
