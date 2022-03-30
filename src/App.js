import React from "react";
// import ApiGet from "./Components/ApiConsume/ApiGet";
// import ApiPost from "./Components/ApiConsume/ApiPost";
import CardHome from "./Components/CardHome/CardHome";
import Detail1 from "./Components/DetailPages/Detail1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail2 from "./Components/DetailPages/Detail2";
import Detail3 from "./Components/DetailPages/Detail3";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardHome />} />
          <Route path="/sedans" element={<Detail1 />} />
          <Route path="/suvs" element={<Detail2 />} />
          <Route path="/luxury" element={<Detail3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
