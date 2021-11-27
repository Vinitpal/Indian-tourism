import React, { useState } from "react";

import "./Visitor-Form.style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setNumber("");
    setEmail("");
    setQuery("");
  };

  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="name">Name: </label>
          <input
            required
            autoComplete="off"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="number">Contact no. : </label>
          <input
            required
            autoComplete="off"
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email: </label>
          <input
            required
            autoComplete="off"
            id="email"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value.replace(/[^a-zA-Z\d]/gi, ""))
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="query">Feedback: </label>
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="submit-btn">
        <button onClick={handleSubmit}>
          Submit <i className="far fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

const VisitorForm = () => {
  return (
    <div className="form">
      <div className="visitor-form">
        <div className="text">
          <h1>
            Help us provide you better services by filling a feedback form !
          </h1>
        </div>
        <div className="form-wrapper">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default VisitorForm;
