import { useEffect, useState } from "react";
import TutorialService from "../../service/Actor.service";
import AlertBox from "../alertBox/AlertBox";
import PropTypes from "prop-types";

const styles = {
  input: {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "8px 16px",
    margin: "10px 0",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    "&:hover": {
      backgroundColor: "#45a049",
    },
  },
  cancelButton: {
    backgroundColor: "#f44336",
    color: "white",
    "&:hover": {
      backgroundColor: "#da190b",
    },
  },
};

const ActorForm = ({ actorData, handleClose }) => {
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

  const handleUpdate = () => {
    TutorialService.aUpdate(form, actorData.id);
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(actorData);
    if (form.firstName.trim() !== "" && form.lastName.trim() !== "") {
      actorData === undefined ? TutorialService.aCreate(form) : handleUpdate();
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
          style={styles.input}
        />
        <p>Apellido del actor</p>
        <input
          name="lastName"
          value={form.lastName}
          id="lastName"
          type="text"
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{ ...styles.button, ...styles.submitButton }}
      >
        {actorData === undefined ? "Añadir" : "Modificar"}
      </button>
      {actorData !== undefined && (
        <button
          onClick={handleClose}
          style={{ ...styles.button, ...styles.cancelButton }}
        >
          Cancelar
        </button>
      )}
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
  handleClose: PropTypes.func,
};

export default ActorForm;
