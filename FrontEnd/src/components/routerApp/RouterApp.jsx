import { Route, Routes } from "react-router-dom";

import CustomTable from "../customTable/CustomTable";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "../pages/Home";

const RouterApp = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/actors"
          element={
            <div>
              Los rollos
              <CustomTable />
            </div>
          }
        />
        <Route
          path="/tutorials/new"
          element={<div>El cacharro este es para agregar actores</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default RouterApp;
