import React from "react";
import spinner from "../../assets/Images/spinner.gif";
const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading ..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
