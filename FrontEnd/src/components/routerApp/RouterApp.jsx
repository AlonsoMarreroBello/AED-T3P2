import { Route, Routes } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "../pages/Home";
import ActorsList from "../pages/ActorsList";
import ActorForm from "../pages/ActorForm";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif", // Modern font
    color: "#333", // Neutral text color
    backgroundColor: "#f9f9f9", // Light background
    padding: 0,
    margin: 0,
  },
  main: {
    flex: 1,
    padding: "20px",
    width: "100%",
    maxHeight: "70%",
    margin: "0 auto", // Center content
    boxSizing: "border-box",
  },
  header: {
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  footer: {
    marginTop: "auto",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

const RouterApp = () => {
  return (
    <div style={styles.container}>
      <Header style={styles.header} />
      <main style={styles.main}>
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
            element={
              <div>
                <ActorForm />
              </div>
            }
          />
        </Routes>
      </main>
      <Footer style={styles.footer} />
    </div>
  );
};

export default RouterApp;
