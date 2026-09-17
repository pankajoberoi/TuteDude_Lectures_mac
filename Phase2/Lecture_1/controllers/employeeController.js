const employees = require('../model/employeeModel')

const {successResponse,errorResponse} = require('../utils/responseUtil')

exports.getEmployees=(req,res)=>{
    successResponse(res,200,"Employees Fetched successfully",employees)
}


exports.getEmployeeId=(req,res)=>{
    const id = Number(req.params.id);

    const employee=employees.find(emp => emp.id === id)


    if(!employee){
        return errorResponse(res,404,"Employee not Found")
    }
    else{
        successResponse(res,200,"Employee Fetched with id success",employee);
    }

}

exports.createEmployee=(req,res)=>{
    const employee=req.body;//employee -> data {}

    employee.id = employees.length+1; // id 

    employees.push(employee);

    successResponse(res,201,"Employee Created Successfully",employee)


}

exports.updateEmployee = (req,res)=>{
    const id=Number(req.params.id);


    const index=employees.findIndex(emp => emp.id===id)


    if(index === -1){
        return errorResponse(res,404,"Employee not found for id "+id)
    }
    else{
        employees[index]={
        id,
        ...req.body
    }
    successResponse(res,200,"Employee Updated Successfully with id " + id)
    }


}

exports.patchEmployee = (req,res) =>{
    const id=Number(req.params.id);

    const employee=employees.find(emp => emp.id === id)


    if(!employee){
        return errorResponse(res,404,"Employee not Found")
    }
    else{
        Object.assign(employee,req.body)
        successResponse(res,200,"Employee Fetched with id success",employee);
    }
     
}

exports.deleteEmployee=(req,res)=>{
    const id=Number(req.params.id);


    const index=employees.findIndex(emp => emp.id===id)


    if(index === -1){
        return errorResponse(res,404,"Employee not found for id "+id)
    }
    else{
        employees.splice(index,1)
    successResponse(res,200,"Employee deleted Successfully",employees)
    }
}