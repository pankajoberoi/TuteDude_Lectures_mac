const express = require("express");

const router = express.Router();

const {
  createEmployeeValidator,
  employeeIdValidator,
  employeeListValidator,
} = require("../validators/employeeValidator");

const validate = require("../Middleware/validationMiddleware");

const {
  getEmployeeId,
  getEmployees,
  createEmployee,
  updateEmployee,
  patchEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.get("/", employeeListValidator, validate, getEmployees);

router.get("/:id", employeeIdValidator, validate, getEmployeeId);

router.post("/", createEmployeeValidator, validate, createEmployee); // -> req.body -> playload

router.put("/:id", employeeIdValidator, validate, updateEmployee);

router.patch("/:id", employeeIdValidator, validate, patchEmployee);

router.delete("/:id", employeeIdValidator, validate, deleteEmployee);

module.exports = router;
