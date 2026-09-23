const {employees,allowedDepartments}= require('../model/employeeModel')


exports.getEmployees = () =>{
    return employees;
}

exports.getEmployeeById= async (id)=>{
    const employee= await employees.find(emp => emp.id === id)
    return employee;
}



exports.createEmployee = async (newEmployeeData) => {


    if(!allowedDepartments.includes(newEmployeeData.department)){
        throw new Error("Invalid department")
    }

    const existingEmployee=await employees.find(emp => emp.email === newEmployeeData.email)

    if(existingEmployee){
        throw new Error("Employee Email already exits");
    }
    else{
        const NewEmployee = {
            id:employees.length+1,
            ...newEmployeeData,
            level:newEmployeeData.salary >= 100000 ? "Senior" : "Regular"
        };

        console.log(NewEmployee);
        employees.push(NewEmployee);

        return NewEmployee;
    }
}

exports.updateEmployee = (id,newEmployeeData) => {
    const index=employees.findIndex((emp)=>emp.id === id)

    if(index === -1){
        throw new Error("Employee not found")
    }
    else{
        employees[index] = {
            id,
            ...newEmployeeData
        }
    }

    return employees[index];
}

exports.patchEmployee = (id,newEmployeeData) => {
    const employee=employees.find((emp)=>emp.id === id)

    if(!employee){
        throw new Error("Employee not found")
    }
    else{
        Object.assign(employee,newEmployeeData)
    }

    return employee;
}
