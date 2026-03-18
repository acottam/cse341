const Validator = require('validatorjs');
 
 
Validator.register(
  'YYYY-MM-DD',
  function (value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(value);
  },
  'The :attribute must be in YYYY-MM-DD format.'
);
 
const validateContact = (req, res, next) => {
  const rules = {
    firstName: 'required|string|max:50',
    lastName: 'required|string|max:50',
    email: 'required|email|max:100',
    favoriteColor: 'required|string|max:50',
    birthday: 'date|YYYY-MM-DD'
  };
 
  const validation = new Validator(req.body, rules);
 
  if (validation.fails()) {
    return res.status(400).json({
      errors: validation.errors.all()
    });
  }
 
  if (req.body.firstName) req.body.firstName = req.body.firstName.trim();
  if (req.body.lastName) req.body.lastName = req.body.lastName.trim();
  if (req.body.email) req.body.email = req.body.email.trim();
  if (req.body.favoriteColor) req.body.favoriteColor = req.body.favoriteColor.trim();
 
  next();
};
 
module.exports = {
  validateContact
};
 

 
