import React from 'react';
import TextField from 'material-ui/TextField';
import { inputStyle } from './styles';

export const renderTextField = (comp, label, stateName, fullWidth = true, extend = {}) => {
  const { errors } = comp.state;
  const attrs = {
    floatingLabelText: label,
    fullWidth,
    value: comp.state[stateName],
    onChange: (e) => { comp.setState({ [stateName]: e.target.value }); },
    errorText: errors[stateName],
    ...inputStyle,
    ...extend,
  };
  return <TextField {...attrs} />;
};
