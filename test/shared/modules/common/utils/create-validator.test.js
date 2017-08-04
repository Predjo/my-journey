
import { createValidator/*, createAsyncValidator*/ } from 'shared/modules/common';

import { expect } from 'chai';

import { Map } from 'immutable';

describe('createValidator from commonModule', () => {

  const validatorParams = [
    { name : 'email', validator : 'isRequired', message : 'Email is Required' },
    { name : 'email', validator : 'isEmail', message : 'Must be a real email' },
    { name : 'name', validator : 'isRequired', message : 'Name is Required' }
  ];
  const validator = createValidator(validatorParams);

  it('it should return a validation function', () => {
    expect(validator).to.be.a('function');
  });

  it('it should fail missing email validation', () => {
    expect(validator(Map({ email : '', name : 'test' }))).to.eql({
      email : 'Email is Required'
    });
  });

  it('it should fail wrong email validation', () => {
    expect(validator(Map({ email : 'test', name : 'test' }))).to.eql({
      email : 'Must be a real email'
    });
  });

});
