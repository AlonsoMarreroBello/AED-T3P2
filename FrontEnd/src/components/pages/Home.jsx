const Home = () => {
  const link = "http://localhost:5173/actors";
  const target = "_self";

  return (
    <div className="container">
      <h1>CRUD T3 P2</h1>
      <p>
        <a href={link} target={target}>
          Listado de tutoriales
        </a>
      </p>
    </div>
  );
};

export default Home;
