import React, { useState } from "react";
import "./CreateUser.css";

export default function CreateUser() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name_complete", "cin", "date_naissance", "mobile"];
    const isAnyFieldEmpty = requiredFields.some((field) => !inputs[field]);

    if (isAnyFieldEmpty) {
      setError("Please fill in all required fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { id: users.length + 1, ...inputs };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setInputs({});
    setError(null);

    console.log("User added:", newUser);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Add Etudiant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Complete Name:
          <input
            type="text"
            name="name_complete"
            value={inputs.name_complete || ""}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          CIN:
          <input
            type="text"
            name="cin"
            value={inputs.cin || ""}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          Date Naissance:
          <input
            type="date"
            name="date_naissance"
            value={inputs.date_naissance || ""}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={inputs.mobile || ""}
            onChange={handleChange}
            className="mobile-input-field"
          />
        </label>
        {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="submit-button">
          Create
        </button>
      </form>
    </div>
  );
}
