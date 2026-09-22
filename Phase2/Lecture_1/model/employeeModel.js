let employees = [
    {
        id:1,
        name:"Rahul",
        department:"IT",
        email:"r@gmail.com",
        salary:50000
    },
    {
        id:2,
        name:"Pankaj",
        department:"HR",
        email:"p@gmail.com",
        salary:40000
    }


]

const allowedDepartments=[
    "IT","HR","finance","sales"
]

module.exports={
    employees:employees,
    allowedDepartments:allowedDepartments
};