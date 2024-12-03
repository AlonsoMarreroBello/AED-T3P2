import { useState } from "react";
import TutorialService from "../../service/tutorial.service";
import AlertBox from "../alertBox/AlertBox";

const ActorForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (form.firstName.trim() !== "" && form.lastName.trim() !== "") {
      TutorialService.aCreate(form);
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
      <button onClick={handleSubmit}>Añadir</button>
      {showMessage && (
        <AlertBox
          message={"Todos los campos son obligatorios"}
          setShowMessage={setShowMessage}
        />
      )}
    </div>
  );
};

ActorForm.propTypes = {};

export default ActorForm;
