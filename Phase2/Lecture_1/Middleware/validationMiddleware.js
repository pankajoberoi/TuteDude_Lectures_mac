const { validationResult } = require("express-validator");

// client -> payload -> route -> req.body -> validator -> validationResult(req) -> controller

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((er) => ({
      field: er.path,
      message: er.msg,
    }));
    return res.status(400).json({
      success: false,
      message: "validation failed",
      error: errors,
    });
  } else {
    next();
  }
};

module.exports = validate;
