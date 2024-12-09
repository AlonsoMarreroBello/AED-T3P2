import { useEffect, useState } from "react";
import TutorialService from "../../service/Actor.service";
import AlertBox from "../alertBox/AlertBox";
import PropTypes from "prop-types";

const ActorForm = ({ actorData }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (actorData) {
      setForm({
        firstName: actorData.firstName || "",
        lastName: actorData.lastName || "",
      });
    }
  }, [actorData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(actorData);
    if (form.firstName.trim() !== "" && form.lastName.trim() !== "") {
      actorData === undefined
        ? TutorialService.aCreate(form)
        : TutorialService.aUpdate(form, actorData.id);
      setForm({
        firstName: "",
        lastName: "",
      });
    } else {
      setShowMessage(true);
      setTimeout(function () {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <div>
      <div>
        <p>Nombre del actor</p>
        <input
          name="firstName"
          value={form.firstName}
          id="firstName"
          type="text"
          onChange={handleChange}
        />
        <p>Apellido del actor</p>
        <input
          name="lastName"
          value={form.lastName}
          id="lastName"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>
        {actorData === undefined ? "Añadir" : "Modificar"}
      </button>
      {showMessage && (
        <AlertBox
          message={"Todos los campos son obligatorios"}
          setShowMessage={setShowMessage}
        />
      )}
    </div>
  );
};

ActorForm.propTypes = {
  actorData: PropTypes.object,
};

export default ActorForm;
