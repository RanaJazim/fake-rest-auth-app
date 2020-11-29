module.exports = function (schema, fields, abortEarly = false) {
  const { value, error } = schema.validate(fields, { abortEarly });
  var err;
  if (error) {
    err = {};
    err.details = error.details.map((err) => err.message);
    err.message = "Error occured";
  }
  return { value, error: err };
};
