import { useEffect, useState } from "react";
import CustomTable from "../customTable/CustomTable";
import TutorialService from "../../service/tutorial.service";

const ActorsList = () => {
  const [actors, setActors] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getActors() {
      try {
        const data = await TutorialService.aGetAll();
        console.log(data);
        setActors(data);
        setError(null);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }
    setTimeout(() => {
      getActors();
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? <></> : <CustomTable actors={actors} />}
      {error && <p>Pasaron rollos</p>}
    </div>
  );
};

ActorsList.propTypes = {};

export default ActorsList;
