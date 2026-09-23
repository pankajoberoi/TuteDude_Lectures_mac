const employeeService=require('../service/employeeService')


const {successResponse,errorResponse} = require('../utils/responseUtil')

exports.getEmployees=(req,res)=>{

    const employees=employeeService.getEmployees();

    successResponse(res,200,"Employees Fetched successfully",employees)
}


exports.getEmployeeId= async (req,res)=>{
    const id = Number(req.params.id);

    const employee = await employeeService.getEmployeeById(id); 

    // why shoudl service layer not receive req, res?

    if(!employee){
        return errorResponse(res,404,"Employee not Found")
    }
    else{
        successResponse(res,200,"Employee Fetched with id success",employee);
    }

}

exports.createEmployee=async (req,res)=>{
    let data = req.body;
    try{
        const employee = await employeeService.createEmployee(data)
        successResponse(res,201,"Employee Created Successfully",employee)
    }
    catch(error){
        return errorResponse(res,409,error.message)
    }
}

exports.updateEmployee = (req,res)=>{
    try{
    const id=Number(req.params.id);
    const data=req.body

    
        const employee=employeeService.updateEmployee(id,data);

        successResponse(res,200,"Employee Updated Successfully",employee)

    }
    catch(error){
        return errorResponse(res,404,error.message)
    }
    

}

exports.patchEmployee = (req,res) =>{
    try{
        const id=Number(req.params.id);
        const data=req.body

    
        const employee=employeeService.patchEmployee(id,data);

        successResponse(res,200,"Employee Updated Successfully",employee)

    }
    catch(error){
        return errorResponse(res,404,error.message)
    }
     
}

exports.deleteEmployee=(req,res)=>{ // HW -> shift this logic to service layer
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
