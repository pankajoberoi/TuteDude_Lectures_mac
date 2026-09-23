const express=require('express')

const router=express.Router();

const {authenticate,authorize} = require('../utils/auth');
const {santizeItemPayload}=require('../utils/santize');
const {validateItemPayload , checkItemExists} = require('../utils/validate')


//Dumy data
let inventory=[
    {id:1,name:'Laptop',category:'Electronic',price:80000,stock:2},
    {id:2,name:'Table',category:'Furniture',price:10000,stock:20}
]

router.use(authenticate);


router.route('/')
    .get((req,res)=>{
        const {category}=req.query;

        let results=inventory;

        if(category){
            results=results.filter((item)=>item.category.toLocaleLowerCase() === category.toLocaleLowerCase())
        }

        res.json({
            success:true,
            requestedBy : req.user.name,
            count:results.length,
            data:results
        })




    })
    .post(authorize('admin'),santizeItemPayload,validateItemPayload,
    (req,res)=>{
        const {name,category,stock,price}=req.body;
        const newItem={
            id:inventory.length+1,
            name,
            category,
            price,
            stock
        }

        inventory.push(newItem)
        res.status(201).json({
            success:true,
            data:inventory
        })

    })

router.route('/:id')
    .all(checkItemExists(inventory))

    .get((req,res)=>{
        res.status(200).json({
            success:true,
            data:req.item

        })
    })

    .put(authorize('admin'),santizeItemPayload,validateItemPayload,
    (req,res)=>{
        const {name,category,price,stock}=req.body;
        if(name) req.item.name=name;
        if(category) req.item.category=category;
        if(price) req.item.price=price;
        if(stock) req.item.stock=stock;

        res.json({success:true,data:req.item})
    })

    .delete(authorize('admin'),(req,res)=>{
        inventory=inventory.filter(i => i.id !== req.item.id)
        res.json({
            success:true,
            message:'Item Deleted',
            data:inventory
        })
    })


module.exports=router;