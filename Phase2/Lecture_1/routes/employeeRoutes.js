const express=require("express")

const router=express.Router();


const {getEmployeeId,getEmployees,createEmployee,updateEmployee,patchEmployee,deleteEmployee}=require("../controllers/employeeController");


router.get("/",getEmployees);

router.get("/:id",getEmployeeId);

router.post("/",createEmployee);

router.put("/:id",updateEmployee);

router.patch("/:id",patchEmployee);

router.delete("/:id",deleteEmployee);


module.exports=router;


