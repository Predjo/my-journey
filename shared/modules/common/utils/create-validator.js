
import validator from 'validator';
import { Map }   from 'immutable';

type ValidatorParamType = {
  name: string,
  validator: string,
  message: string
};

const extendedValidator = Object.assign({}, validator, {
  isRequired(value: string): bool {
    return Boolean(value);
  }
});

export function createValidator(params: Array<ValidatorParamType>): Function {
  return ( values: Map ) => {
    const errors = {};

    params.forEach((param: ValidatorParamType) => {
      const value         = values.get(param.name, '');
      const validatorType = param.validator;

      if (!errors[param.name]) {
        if (extendedValidator[validatorType]) {
          if (!extendedValidator[validatorType].call(this, value)) {
            errors[param.name] = param.message;
          }
        } else {
          throw new Error('Undefined validator' + validatorType);
        }
      }
    });

    return errors;
  };
}

export function createAsyncValidator(params: Array<ValidatorParamType>): Function {
  console.error('TO DO', params);
}
