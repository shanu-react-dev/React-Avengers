import React from "react";
import PropTypes from "prop-types";

const Props = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.isStudent ? "yes" : "No"}</h1>
    </div>
  );
};

Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Props;
