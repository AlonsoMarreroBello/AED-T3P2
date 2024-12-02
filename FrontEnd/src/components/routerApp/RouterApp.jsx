import { Route, Routes } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "../pages/Home";
import ActorsList from "../pages/ActorsList";

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
              <ActorsList />
            </div>
          }
        />
        <Route
          path="/actors/new"
          element={<div>El cacharro este es para agregar actores</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default RouterApp;
