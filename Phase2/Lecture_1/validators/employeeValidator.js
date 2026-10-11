const { body, param, query } = require("express-validator");

const createEmployeeValidator = [
  //validation -> rules
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name length is rather to low or to big"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Valid email is required"),

  body("salary")
    .isFloat({ min: 15000 })
    .withMessage("Salary must be atleat 15k"),

  body("age")
    .isInt({ min: 18, max: 65 })
    .withMessage("PLease enter valid age in range 18 to 65"),

  body("department")
    .isIn(["IT", "HR", "Finance", "Sales"])
    .withMessage("Invalid department"),

  //Conditional validation
  // body("contractEndDate")
  //   .if(body("employementType").equals("CONTRACTOR"))
  //   .notEmpty()
  //   .withMessage("Contract end date is required for contractors"),

  // cross-field validation -> custom validator -> Q
  // body("confirmPass").custom((value1, { req }) => {
  //   if (value1 !== req.body.setPass) {
  //     throw new Error("Passwords do not match");
  //   } else {
  //     return true;
  //   }
  // }
];

const employeeIdValidator = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Employee Id must be positive integer and should not be 0"),
];

const employeeListValidator = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be positive integer and should not be 0"),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be btw 1 and 100"),
];

module.exports = {
  createEmployeeValidator,
  employeeIdValidator,
  employeeListValidator,
};

//?validation -> erros -> read?

//body("profileURL")
// .isURL()

//body("joiningDate")
// .isDate()
