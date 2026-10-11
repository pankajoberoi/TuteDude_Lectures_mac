let employees = [
  {
    id: 1,
    name: "Rahul",
    age: 30,
    department: "IT",
    email: "r@gmail.com",
    salary: 50000,
  },
  {
    id: 2,
    name: "Pankaj",
    age: 26,
    department: "HR",
    email: "p@gmail.com",
    salary: 40000,
  },
];

const allowedDepartments = ["IT", "HR", "Finance", "Sales"];

module.exports = {
  employees: employees,
  allowedDepartments: allowedDepartments,
};
