const school = require("./schoolModel")
const express = require("express")

const CreatedSchool = async (req,res)=>{
    try{
        const Created = await school.create({
                name: req.body.name,
                population: req.body.population
        })
        res.status(200).json({data: Created, message: "Created successfully"})
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

const GetAllSchool = async (req,res)=>{
    try{
            const GetAll = await school.find()
            res.status(200).json({data: GetAll})
    }catch(error){
res.status(404).json({message: error.message})
    }
}

const GetOneSchool = async (req,res)=>{
    try{
        const schoolId = await req.params.id
        const GetOne = await school.findById(schoolId)
        res.status(200).json({data: GetOne})
    }catch(error){
        res.status(404).json({messaage: error.message})
    }
}

const UpdateSchool = async (req,res)=>{
try{
    const schoolId = await school.findById(req.params.id)
    const updated = await schoolId.updateOne({
                name: req.body.name,
                population: req.body.population
    })
    res.status(200).json({data: updated})
}catch(error){
    res.status(404).json({message:error.message})
}
}

const DeletedSchool = async (req,res)=>{
    try{
            const schoolId = req.params.id
            const Deleted = await school.findByIdAndDelete(schoolId)
            res.status(200).json({data: Deleted})
    }catch(error){
        res.status(404).json({message: error.message})
    }
}
module.exports = {
    CreatedSchool,
    GetAllSchool,
    GetOneSchool,
    UpdateSchool,
    DeletedSchool
}