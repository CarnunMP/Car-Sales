import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const AddedFeature = props => {
  const {feature, removeFeature, car} = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(feature, car)}>X</button>
      {feature.name}
    </li>
  );
};

export default connect(
  state => state,
  actionCreators
)(AddedFeature);
