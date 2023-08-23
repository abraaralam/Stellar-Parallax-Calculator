import React, { useState } from "react";
import mainImage from "../images/herbigHaro.png";
import logoImage from "../images/mcdonaldinstitute.png";

const TextboxForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <div
      className="position-relative"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <img
        src={mainImage}
        alt="Main"
        className="object-fit-cover w-100"
        style={{ height: "75vh" }} 
      />

      <div className="container position-absolute top-50 start-50 translate-middle text-center">
        <img
          src={logoImage}
          alt="Logo"
          className="img-fluid mt-5"
          style={{ maxWidth: "150px" }}
        />
        <h3 className="mt-3">McDonald Institute</h3>
        <h3>Parallax Finder</h3>

        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Explore the cosmos!"
            />
          </div>
          <div className="col-md-2 mt-2 mt-md-0">
            <button
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextboxForm;
