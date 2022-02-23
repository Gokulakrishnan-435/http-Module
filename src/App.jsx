import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatCrud from "./component/CreateCrud";
import Delete from "./component/Delete";
import EditCrud from "./component/EditCrud";
import Home from "./component2/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creat-crud" element={<CreatCrud />} />
          <Route path="/edit-crud/:id" element={<EditCrud />} />
          <Route path="/delete-crud/:id" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
