import pick from 'lodash/pick';
import keys from 'lodash/keys';

export const hasAnyValue = (obj) => {
  for (let key in obj) {
    if (obj[key] !== null)
      return true;
    }
  return false;
};

const validation = {
  required: (value, message) => {
    if (!value || !value.toString().trim()) {
      return (typeof message === 'string')
        ? message
        : 'To pole jest wymagane';
    }
    return null;
  },
  checked: (value, message) => {
    if (!value) {
      return (typeof message === 'string')
        ? message
        : 'To pole jest wymagane';
    }
    return null;
  },
};

export default (comp, successCallback) => {
  const toValidate = pick(comp.state, keys(comp.toValidate));
  const errors = {};
  Object.keys(comp.toValidate).map((key) => {
    errors[key] = null;
    Object.keys(comp.toValidate[key]).map((innerKey) => {
      if (!errors[key]) {
        errors[key] = validation[innerKey](toValidate[key], comp.toValidate[key][innerKey], comp);
      }
    });
  });
  if (hasAnyValue(errors)) {
    comp.setState({ errors });
  } else {
    const valuesToSubmit = pick(comp.state, comp.values);
    successCallback(valuesToSubmit);
  }
};
