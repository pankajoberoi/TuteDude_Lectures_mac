const { body, params, query } = require("express-validator");

const createEmployeeSanitizer = [
  body("email").trim().normalizeEmail().isEmail(),

  body("password") // hashing -> en -> denc
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 2,
      minSymbols: 1,
    })
    .withMessage("Password does not meet security standards"),
];

// Get /employees/

//     param(id)
//         isInt()

// Get /employees?page=1&limit=10

//     query("page")
//         isInt({min:1})

module.exports = createEmployeeSanitizer;
