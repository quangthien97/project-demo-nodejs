import Validation from 'express-validation';

function validation(schema) {
  return Validation.validate(schema, {}, {});
}

export default validation;
